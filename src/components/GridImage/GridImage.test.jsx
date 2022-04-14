import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridImage />', () => {
  test('should render grid', () => {
    renderTheme(<GridImage {...mock} background={undefined} />);
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
