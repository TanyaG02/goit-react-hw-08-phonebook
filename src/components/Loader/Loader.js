import { Blocks } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <Blocks
        heigth="200"
        width="200"
        color="blue"
        ariaLabel="blocks-loading"
      />
    </Wrapper>
  );
};
export default Loader;
