import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';
import PopUp from '../pop-up/PopUp';
import IconButton from './IconButton';

export default {
  title: 'button/Icon-button',
  component: IconButton,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 Modal 버튼을 정의 합니다.',
  },
} as Meta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const Green = Template.bind({});
Green.args = {
  children: 'button',
  buttonColor: 'Green',
  endIcon: 'plus_round_small',
};

export const Red = Template.bind({});
Red.args = {
  children: 'button',
  buttonColor: 'Red',
  endIcon: 'close_round_small',
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof PopUp> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <IconButton
          buttonColor="Green"
          endIcon="plus_round_small"
          fullWidth={false}
        >
          button
        </IconButton>
      </li>
      <li>
        <IconButton
          buttonColor="Red"
          endIcon="close_round_small"
          fullWidth={false}
        >
          button
        </IconButton>
      </li>
    </DesginTemplateContainer>
  );
};

export const DesignQATemplate = DesignTemplate.bind({});

const DesginTemplateContainer = styled.ul`
  display: inline-flex;
  flex-direction: column;
  li {
    margin-bottom: 20px;
  }
`;
