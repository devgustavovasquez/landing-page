import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu />', () => {
  test('should render', () => {
    renderTheme(<Menu>text</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
