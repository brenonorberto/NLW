import { ReactNode } from 'react';
import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered: boolean;
  isHighlighted: boolean;
};


export function Question({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children,
}: QuestionProps) {
  return (
    <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
          <div className="user-info">
              <img src={author.avatar} alt={author.name} />
              <span>{author.name}</span>
          </div>
          <div>
          {children}
          </div>
      </footer>
    </div>
  );
}
