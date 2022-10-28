import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';

import Button from './Button';

export default {
  title: 'button/Single_Button',
  component: Button,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼을 정의합니다.',
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  disabled: false,
  fullWidth: false,
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  disabled: false,
  fullWidth: false,
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  disabled: false,
  fullWidth: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  fullWidth: false,
};

const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
