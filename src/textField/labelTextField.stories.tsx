import { ComponentStory, Meta } from '@storybook/react';
import TextInput from './TextInput';
import IconTextInput from './IconTextInput';
import styled from 'styled-components';
import BasicInput from '../input/BasicInput';
import InputLabel from '../input-label/InputLabel';

export default {
  title: 'Textfield/Label-Textfield',
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
      <BasicInput
        placeholder="welcome@dgdr.co.kr"
        label={<InputLabel text="레이블" essential htmlFor="인풋" />}
      />
    </>
  ),
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof TextInput> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <TextInput>
          <BasicInput
            placeholder="welcome@dgdr.co.kr"
            label={<InputLabel text="레이블" essential htmlFor="인풋" />}
          />
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
