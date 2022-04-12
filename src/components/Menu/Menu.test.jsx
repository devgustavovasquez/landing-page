import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  test('should render logo and Main Menu Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();
  });

  test('should render menu mobile and button open/close', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'block', {
      media: theme.medias.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);
    expect(screen.queryByRole('navigation', { name: 'Main menu' }).firstChild).not.toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(container).toMatchSnapshot();
  });
});
