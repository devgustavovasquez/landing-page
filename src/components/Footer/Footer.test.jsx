import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  test('should match snapshot', () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>Hello</h1>" />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
