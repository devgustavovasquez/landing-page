import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContent />', () => {
  test('should render grid content', () => {
    renderTheme(<GridContent {...mock} background={undefined} />);
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
