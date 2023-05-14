import { css } from '@emotion/css';

export const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 340px;
  background-image: linear-gradient(
    to right top,
    #e653a6,
    #d462bc,
    #bf70cd,
    #a67dd9,
    #8c88e0,
    #6c9bef,
    #44acf7,
    #00bbf8,
    #00d5f1,
    #00eacb,
    #79f893,
    #e1fb5f
  );

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

export const combinedViewStyles = css`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 4px;
`;

export const buttonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`;

export const inputStyles = css`
  padding: 8px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: 600px;

  &:hover,
  &:focus {
    outline: none;
    border-color: transparent;
  }

  &:focus + .iconStyles {
    fill: red;
    width: 2.5em;
  }

  @media (max-width: 768px) {
    width: 400px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const iconStyles = css`
  vertical-align: middle;
  margin-right: 4px;
  font-size: 1.2em;
`;

export const focusedIconStyles = css`
  ${iconStyles}
  fill: #0676cc;
`;
