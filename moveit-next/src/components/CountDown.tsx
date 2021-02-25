import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const [time, setTime] = useState(0.1 * 60);
    const [IsActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    function startCountdown() {
        setActive(true);
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout);
        setActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => { /* Gerador de efeitos colaterais */
        if (IsActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (IsActive && time === 0) {
            setHasFinished(true);
            setActive(false);
        }
    }, [IsActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                  disabled
                  className={styles.countdownButton}
                >
                  Ciclo encerrado
                </button>  
              ) : (
                <>
                  { IsActive ? (
                    <button 
                      type="button" 
                      className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                      onClick={resetCountdown}    
                    >
                      Abandonar ciclo
                    </button>                
                    
                  ) : (
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}    
                    >
                     Iniciar um ciclo
                    </button>
                  )}
                </>
            )}

        </div>
    );
}