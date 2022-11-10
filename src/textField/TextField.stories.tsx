import { ComponentStory, Meta } from '@storybook/react';
import TextInput from './TextInput';
import BasicInput from '../input/BasicInput';
import styled from 'styled-components';
import InputLabel from '../input-label/InputLabel';

export default {
  title: 'Textfield/Basic-Textfield',
  component: TextInput,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 Text Field을 정의 합니다.',
  },
} as Meta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <BasicInput placeholder="welcome@dgdr.co.kr" />
    </>
  ),
};

export const Success = Template.bind({});
Success.args = {
  fullWidth: false,
  status: 'isSucess',
  children: (
    <>
      <BasicInput status="isSucess" placeholder="welcome@dgdr.co.kr" />
    </>
  ),
};

export const Error = Template.bind({});
Error.args = {
  status: 'isError',
  children: (
    <>
      <BasicInput status="isError" placeholder="welcome@dgdr.co.kr" />
    </>
  ),
  errorMsg: 'error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <>
      <BasicInput placeholder="welcome@dgdr.co.kr" disabled />
    </>
  ),
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof TextInput> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <TextInput>
          <BasicInput placeholder="welcome@dgdr.co.kr" />
        </TextInput>
      </li>
      <li>
        <TextInput status="isSucess">
          <BasicInput status="isSucess" placeholder="welcome@dgdr.co.kr" />
        </TextInput>
      </li>
      <li>
        <TextInput status="isError" errorMsg="error message">
          <BasicInput status="isError" placeholder="welcome@dgdr.co.kr" />
        </TextInput>
      </li>
      <li>
        <TextInput>
          <BasicInput placeholder="welcome@dgdr.co.kr" disabled />
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
