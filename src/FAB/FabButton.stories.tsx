import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';
import FabButton from './FabButton';

export default {
  title: 'button/FAB-button',
  component: FabButton,
  parameter: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼 그룹을 정의합니다.',
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof FabButton>;

const Template: ComponentStory<typeof FabButton> = (args) => (
  <FabButton {...args} />
);

export const Green = Template.bind({});
Green.args = {
  buttonColor: 'Green',
  iconType: 'plus_big',
};

export const Red = Template.bind({});
Red.args = {
  buttonColor: 'Red',
  iconType: 'edit',
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof FabButton> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <FabButton
          buttonColor="Green"
          iconType="plus_big"
          iconColor="#ffffff"
        />
      </li>
      <li>
        <FabButton buttonColor="Red" iconType="edit" iconColor="#ffffff" />
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
