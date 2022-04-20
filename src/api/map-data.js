export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footerHtml = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footerHtml,
      slug,
      title,
      sections,
      menu,
    };
  });
};
