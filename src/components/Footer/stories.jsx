import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://linkedin.com/in/devgustavovasquez"> Feito por Gustavo Vasquez </a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
