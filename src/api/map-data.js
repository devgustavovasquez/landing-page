import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footerHtml = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
