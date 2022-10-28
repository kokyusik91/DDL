import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';

import Button from '../Sinlge-button/Button';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'button/Multiple_Button',
  component: ButtonGroup,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼그룹을 정의합니다.',
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
} as Meta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

// basic 버튼 🥰
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
  fullWidth: false,
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
  fullWidth: false,
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
  fullWidth: false,
};

const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
