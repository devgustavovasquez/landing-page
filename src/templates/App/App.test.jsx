import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'hello' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });

  expect(headingContainer).toHaveStyleRule('background', 'pink');
  expect(headingContainer).toMatchSnapshot();
});
