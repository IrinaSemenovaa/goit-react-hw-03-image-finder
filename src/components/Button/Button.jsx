import { css } from '@emotion/css';

const btnStyles = css`
  display: block;
  margin: 0 auto;
  background-color: #fff;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &: hover {
    background-color: #615f5f;
    border: 1px solid #615f5f;
    color: #fff;
  }
`;

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={btnStyles}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
