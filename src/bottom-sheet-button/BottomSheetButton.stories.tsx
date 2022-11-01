import { ComponentStory, Meta } from '@storybook/react';
import BottomSheetButton from './BottomSheetButton';
import Button from '../advanced-button/Button';
import styled from 'styled-components';

export default {
  title: 'button/BottomSheet-button',
  component: BottomSheetButton,
  parameters: {
    componentSubtitle:
      'DGDR 서비스에서 사용하는 Bottom sheet 버튼을 정의 합니다',
  },
} as Meta<typeof BottomSheetButton>;

const Template: ComponentStory<typeof BottomSheetButton> = (args) => (
  <BottomSheetButton {...args} />
);

export const Green = Template.bind({});
Green.args = {
  children: (
    <Button
      children="확인"
      onClick={() => {
        alert('버튼 클릭!');
      }}
      buttonColor="Green"
      fullWidth={true}
    />
  ),
};

export const Red = Template.bind({});
Red.args = {
  children: (
    <Button
      children="확인"
      onClick={() => {
        alert('버튼 클릭!');
      }}
      buttonColor="Red"
      fullWidth={true}
    />
  ),
};

const DesignTemplate: ComponentStory<typeof BottomSheetButton> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <BottomSheetButton fullWidth={false}>
          <Button
            onClick={() => {
              alert('버튼 클릭!');
            }}
            buttonColor="Green"
            fullWidth
          >
            확인
          </Button>
        </BottomSheetButton>
      </li>
      <li>
        <BottomSheetButton fullWidth={false}>
          <Button
            onClick={() => {
              alert('버튼 클릭!');
            }}
            buttonColor="Red"
            fullWidth
          >
            확인
          </Button>
        </BottomSheetButton>
      </li>
    </DesginTemplateContainer>
  );
};

export const DesignQATemplate = DesignTemplate.bind({});

const DesginTemplateContainer = styled.ul`
  display: inline-flex;
  flex-direction: column;
  li:first-child {
    margin-bottom: 40px;
  }
`;
