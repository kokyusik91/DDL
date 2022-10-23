import { ComponentStory, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'stories/Button',
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
  text: 'button',
  color: 'green',
  disabled: false,
  onClick: () => {
    alert('기본 버튼 클릭!');
  },
};

export const Green = Template.bind({});
Green.args = {
  text: 'button',
  color: 'green',
  disabled: false,
};

export const Red = Template.bind({});
Red.args = {
  text: 'button',
  color: 'red',
  disabled: false,
};

export const White = Template.bind({});
White.args = {
  text: 'button',
  color: 'white',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'button',
  color: 'white',
  disabled: true,
};
