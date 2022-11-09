import { ComponentStory, Meta } from '@storybook/react';
import TextInput from './TextInput';
import IconTextInput from './IconTextInput';
import styled from 'styled-components';

export default {
  title: 'Textfield/Icon-Textfield',
  component: TextInput,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 Text Field을 정의 합니다.',
  },
} as Meta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  return <IconTextInput {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <IconTextInput placeholder="welcome@dgdr.co.kr" />
    </>
  ),
};

export const Success = Template.bind({});
Success.args = {
  status: 'isSucess',
  children: (
    <>
      <IconTextInput status="isSucess" placeholder="welcome@dgdr.co.kr" />
    </>
  ),
};

export const Fail = Template.bind({});
Fail.args = {
  status: 'isError',
  children: (
    <>
      <IconTextInput status="isError" placeholder="welcome@dgdr.co.kr" />
    </>
  ),
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof TextInput> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <TextInput>
          <IconTextInput placeholder="welcome@dgdr.co.kr" />
        </TextInput>
      </li>
      <li>
        <TextInput status="isSucess">
          <IconTextInput status="isSucess" placeholder="welcome@dgdr.co.kr" />
        </TextInput>
      </li>
      <li>
        <TextInput status="isError" errorMsg="error message">
          <IconTextInput status="isError" placeholder="welcome@dgdr.co.kr" />
        </TextInput>
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
