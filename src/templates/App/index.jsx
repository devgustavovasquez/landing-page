import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';

const Home = () => {
  return <Base {...mockBase} />;
};

export default Home;
