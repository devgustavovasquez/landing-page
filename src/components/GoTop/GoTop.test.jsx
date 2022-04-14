import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop />', () => {
  test('should render a go to top button', () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchSnapshot();
  });
});
