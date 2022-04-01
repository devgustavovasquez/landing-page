import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import links from './mock';

describe('<NavLinks />', () => {
  test('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  test('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  test('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.medias.lteMedium,
    });
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container).toMatchSnapshot();
  });
});
