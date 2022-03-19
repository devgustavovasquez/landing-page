import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  test('should render home', () => {
    renderTheme(<Home />);
  });
});
