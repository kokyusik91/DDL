import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'stories/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼을 정의합니다.'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// small 버튼 🥰
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  disabled : false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  disabled : false,
};

