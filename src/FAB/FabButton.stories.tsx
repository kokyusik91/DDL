import { ComponentStory, Meta } from '@storybook/react';
import FabButton from './FabButton';

export default {
  title: 'button/FAB-button',
  component: FabButton,
  parameter: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼 그룹을 정의합니다.',
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof FabButton>;

const Template: ComponentStory<typeof FabButton> = (args) => (
  <FabButton {...args} />
);

export const Green = Template.bind({});
Green.args = {
  buttonColor: 'Green',
  iconType: 'plus_big',
};

export const Red = Template.bind({});
Red.args = {
  buttonColor: 'Red',
  iconType: 'edit',
};
