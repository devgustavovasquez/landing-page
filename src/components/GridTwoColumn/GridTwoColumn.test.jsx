import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  test('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
