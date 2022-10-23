import { ComponentStory, Meta } from '@storybook/react';

import ButtonGroup from './ButtonGroups';
import Button from '../Sinlge-button/Button';

export default {
  title: 'button/Multiple_Button',
  component: ButtonGroup,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼그룹을 정의합니다.',
  },
  decorators: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}></ButtonGroup>
);

// basic 버튼 🥰
export const Basic = Template.bind({});
Basic.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="button" color="white" disabled={false} />
      <Button text="button" color="green" disabled={false} />
    </>
  ),
};

// basic 버튼 🥰
export const Green = Template.bind({});
Green.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="button" color="white" disabled={false} />
      <Button text="button" color="green" disabled={false} />
    </>
  ),
};

// basic 버튼 🥰
export const Red = Template.bind({});
Red.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="button" color="white" disabled={false} />
      <Button text="button" color="red" disabled={false} />
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  direction: 'row',
  gap: '16px',
  children: (
    <>
      <Button text="button" color="white" disabled={false} />
      <Button text="button" color="red" disabled={true} />
    </>
  ),
};
