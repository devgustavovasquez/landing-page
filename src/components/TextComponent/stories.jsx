import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos vel velit natus possimus commodi minus modi perferendis sed sapiente, sit corrupti, illo reprehenderit assumenda porro odio totam, quisquam voluptatibus?',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <TextComponent {...args} />;
};
