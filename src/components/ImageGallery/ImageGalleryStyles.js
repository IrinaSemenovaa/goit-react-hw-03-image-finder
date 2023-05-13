import { css } from '@emotion/css';

export const containerStyles = css`
  padding: 10px 10px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const galleryStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

