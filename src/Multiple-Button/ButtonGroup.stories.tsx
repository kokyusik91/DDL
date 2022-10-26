import { ComponentStory, Meta } from '@storybook/react';

import Button from '../Sinlge-button/Button';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'button/Multiple_Button',
  component: ButtonGroup,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼그룹을 정의합니다.',
  },
} as Meta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

// basic 버튼 🥰
export const Basic = Template.bind({});
Basic.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="버튼" color="white" disabled={false} />
      <Button text="버튼" color="green" disabled={false} />
    </>
  ),
};

export const Green = Template.bind({});
Green.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="버튼" color="white" disabled={false} />
      <Button text="버튼" color="green" disabled={false} />
    </>
  ),
};

export const Red = Template.bind({});
Red.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="버튼" color="white" disabled={false} />
      <Button text="버튼" color="red" disabled={false} />
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="버튼" color="white" disabled={false} />
      <Button text="버튼" color="red" disabled={true} />
    </>
  ),
};
