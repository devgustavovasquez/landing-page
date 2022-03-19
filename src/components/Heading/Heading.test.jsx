import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  test('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  test('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test('should render correct small size', () => {
    renderTheme(<Heading size="small">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  test('should render correct medium size', () => {
    renderTheme(<Heading size="medium">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  test('should render correct big size', () => {
    renderTheme(<Heading size="big">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  test('should render correct font size in mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, { media: theme.medias.lteMedium });
  });

  test('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
