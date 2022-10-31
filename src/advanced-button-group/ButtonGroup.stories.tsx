import { ComponentStory, Meta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from '../advanced-button/Button';

export default {
  title: 'button/Multiple-button',
  component: ButtonGroup,
  parameter: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼 그룹을 정의합니다.',
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Green = Template.bind({});
Green.args = {
  gap: 16,
  fullWidth: false,
  children: (
    <>
      <Button
        buttonColor="White"
        fullWidth
        onClick={() => {
          alert('취소 버튼 클릭!');
        }}
      >
        취소
      </Button>
      <Button
        buttonColor="Green"
        fullWidth
        onClick={() => {
          alert('확인 버튼 클릭!');
        }}
      >
        확인
      </Button>
    </>
  ),
};

export const Red = Template.bind({});
Red.args = {
  gap: 16,
  fullWidth: false,
  children: (
    <>
      <Button
        buttonColor="White"
        fullWidth
        onClick={() => {
          alert('취소 버튼 클릭!');
        }}
      >
        취소
      </Button>
      <Button
        buttonColor="Red"
        fullWidth
        onClick={() => {
          alert('확인 버튼 클릭!');
        }}
      >
        확인
      </Button>
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  gap: 16,
  fullWidth: false,
  children: (
    <>
      <Button
        buttonColor="White"
        fullWidth
        onClick={() => {
          alert('취소 버튼 클릭!');
        }}
      >
        취소
      </Button>
      <Button
        buttonColor="Red"
        fullWidth
        disabled
        onClick={() => {
          alert('확인 버튼 클릭!');
        }}
      >
        확인
      </Button>
    </>
  ),
};
