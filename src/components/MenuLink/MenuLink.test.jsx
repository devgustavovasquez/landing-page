import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  test('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">text</MenuLink>);
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute('target', '_self');
  });

  test('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        text
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute('target', '_blank');
  });

  test('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        text
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'text' })).toMatchSnapshot();
  });
});
