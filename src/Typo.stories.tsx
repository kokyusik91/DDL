import { ComponentStory, Meta } from '@storybook/react';
import theme from '../styles/theme/index';

import Typo from './Typo';

export default {
  title: 'stories/Typo',
  component: Typo,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 타이포 그래피를 정의합니다.',
  },
} as Meta<typeof Typo>;

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />;
const letter = theme.palette.grey[600];
// basic 버튼 🥰
export const Basic = Template.bind({});
Basic.args = {
  fontStyle: theme.palette.grey[600],
};
