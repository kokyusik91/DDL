import { ComponentStory, Meta } from '@storybook/react';
import IconButton from './IconButton';
import Icon from '../dgdr-Icon/Icon';

export default {
  title: 'button/Icon-button',
  component: IconButton,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 아이콘 버튼을 정의 합니다',
  },
} as Meta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  text: 'button',
  color: 'green',
  icon: <Icon icon="close_small" />,
};
