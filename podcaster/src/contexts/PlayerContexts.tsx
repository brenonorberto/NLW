import { createContext, useState, ReactNode, useContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextsData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    isLooping: boolean;
    play: (episode: Episode) => void;
    playList: (episode: Episode[], index: number) => void;
    setPlayingState: (state: boolean) => void;
    togglePlay: () => void;
    toggleLoop: () => void;
    playNext: () => void;
    playPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
};

type PlayerContextsProviderProps = {
    children: ReactNode;
}

export const PlayerContexts = createContext({} as PlayerContextsData); 

export function PlayerContextsProvider({ children }: PlayerContextsProviderProps) {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);

  
    function play(episode: Episode) {
      setEpisodeList([episode]);
      setCurrentEpisodeIndex(0);
      setIsPlaying(true);
    }

    function playList(list: Episode[], index: number) {
        setEpisodeList(list);
        setCurrentEpisodeIndex(index);
        setIsPlaying(true);
    }
  
    function togglePlay() {
      setIsPlaying(!isPlaying)
    }

    function toggleLoop() {
        setIsLooping(!isLooping)
      }
  
    function setPlayingState(state: boolean) {
      setIsPlaying(state);
    }

    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = (currentEpisodeIndex + 1) < episodeList.length

    function playNext() {
        const nextEpisodeIndex = currentEpisodeIndex + 1;

        if (hasNext) {
            setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        }
    }

    function playPrevious() {
        if (hasPrevious) {
            setCurrentEpisodeIndex(currentEpisodeIndex - 1);
        }
    }
  
    return (
      <PlayerContexts.Provider value={{ 
          episodeList, 
          currentEpisodeIndex, 
          play, 
          playNext,
          playPrevious,
          playList,
          isPlaying, 
          togglePlay,
          isLooping,
          toggleLoop, 
          setPlayingState,
          hasNext,
          hasPrevious 
        }}> 
        {children}
      </PlayerContexts.Provider>
    )      
}

export const usePlayer = () => {
    return useContext(PlayerContexts);
}