import { css } from '@emotion/css';

export const ModalBackdropStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentStyles = css`
  width: 90%;
  height: 90%;
  max-width: 90vw;
  max-height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalImageStyles = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
