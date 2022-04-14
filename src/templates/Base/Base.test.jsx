import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  test('should render', () => {
    renderTheme(<Base>text</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
