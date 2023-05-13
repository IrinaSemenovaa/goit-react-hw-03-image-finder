import { FaRegHandPointUp } from 'react-icons/fa';
import { css, keyframes } from '@emotion/css';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const errorMessageStyles = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  animation: ${slideIn} 0.7s ease-in-out;
`;

export default function NotFoundMessage({ message }) {
  return (
    <div className={errorMessageStyles}>
      {message}
      <span>
        <FaRegHandPointUp />
      </span>
    </div>
  );
}

