import { ComponentStory, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'button/Single-button',
  component: Button,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼을 정의합니다.',
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  children: '확인',
  buttonColor: 'Green',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const Red = Template.bind({});
Red.args = {
  children: '확인',
  buttonColor: 'Red',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const White = Template.bind({});
White.args = {
  children: '확인',
  buttonColor: 'White',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '확인',
  buttonColor: 'White',
  fullWidth: false,
  disabled: true,
  onClick: () => alert('버튼 클릭!'),
};

// 이렇게 하면 뭐 컨트롤을 할 수 없네?!
// export const Green = () => (
//   <Button
//     buttonColor="Green"
//     fullWidth={false}
//     onClick={() => alert('버튼클릭!')}
//   >
//     Button
//   </Button>
// );
