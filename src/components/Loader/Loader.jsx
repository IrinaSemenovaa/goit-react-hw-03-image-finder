import PuffLoader from 'react-spinners/PuffLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { css } from '@emotion/css';

const loderWrapperStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const propagateLoaderStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export function LoaderImg() {
  return (
    <div className={loderWrapperStyles}>
      <PuffLoader color="#c1c9c7" speedMultiplier={0.8} />
    </div>
  );
}

export function GeneralLoader() {
  return (
    <div className={propagateLoaderStyles}>
      <PropagateLoader color="#c1c9c7" />
    </div>
  );
}
