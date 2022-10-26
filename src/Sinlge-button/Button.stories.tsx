import { ComponentStory, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'button/Single_Button',
  component: Button,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼을 정의합니다.',
  },
  decorators: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// basic 버튼 🥰
export const Basic = Template.bind({});
Basic.args = {
  color: 'green',
  disabled: false,
  onClick: () => {
    alert('기본 버튼 클릭!');
  },
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  disabled: false,
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  disabled: false,
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
