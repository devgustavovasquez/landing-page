import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridText />', () => {
  test('should render grid content', () => {
    renderTheme(<GridText {...mock} background={undefined} />);
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
