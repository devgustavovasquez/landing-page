import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  test('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="HelloWorld" />);
    expect(screen.getByRole('link', { name: 'HelloWorld' })).toHaveAttribute('href', '#target');
  });

  test('should render logo with image', () => {
    renderTheme(<LogoLink link="#target" text="HelloWorld" srcImg="image.jpg" />);
    expect(screen.getByAltText('HelloWorld')).toHaveAttribute('src', 'image.jpg');
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="HelloWorld" srcImg="image.jpg" />);
    expect(container).toMatchSnapshot();
  });
});
