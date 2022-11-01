import { Meta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../advanced-button/Button';
import { default as SnackBar, SnackBarProps } from './SnackBar';

export default {
  title: 'Component/Snackbar',
  component: SnackBar,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 SnackBar을 정의 합니다.',
  },
} as Meta<typeof SnackBar>;

const Template: ComponentStory<typeof SnackBar> = (args) => {
  const [snackBarOpen, setOpen] = useState(false);
  return (
    <StoryContainer>
      <Button
        buttonColor="Green"
        fullWidth={false}
        onClick={() => setOpen(true)}
        customStyle={{ margin: '0 auto' }}
      >
        Positive SnackBar 띄우기
      </Button>
      <SnackBar
        {...args}
        open={snackBarOpen}
        closeSnackBar={() => setOpen(false)}
      />
    </StoryContainer>
  );
};

export const Positive = Template.bind({});
Positive.args = {
  snackBarType: 'positive',
  snackBarText: '등록이 완료되었습니다',
  iconType: 'check_round_small',
  durationTime: 3000,
};

const TemplateTwo: ComponentStory<typeof SnackBar> = ({
  ...args
}: SnackBarProps) => {
  const [snackBarOpen, setOpen] = useState(false);
  return (
    <StoryContainer>
      <Button
        buttonColor="Red"
        fullWidth={false}
        onClick={() => setOpen(true)}
        customStyle={{ margin: '0 auto' }}
      >
        Negative SnackBar 띄우기
      </Button>
      <SnackBar
        {...args}
        open={snackBarOpen}
        closeSnackBar={() => setOpen(false)}
      />
    </StoryContainer>
  );
};

export const Negative = TemplateTwo.bind({});
Negative.args = {
  snackBarType: 'negative',
  snackBarText:
    '건물 주소를 검색해주세요 건물 주소를 검색해주세요 건물 주소를 검색해주세요',
  iconType: 'error_round_small',
  textType: 'body3_line',
  durationTime: 3000,
};

// 디자이너에게 보여주는 템플릿
const TemplateThree: ComponentStory<typeof SnackBar> = () => {
  return (
    <StoryContainer>
      <SnackBar
        open={true}
        snackBarType="positive"
        snackBarText="등록이 완료되었습니다"
        iconType="check_round_small"
        textType="body3"
        fullWidth={false}
        closeSnackBar={() => console.log('닫힘')}
        customStyle={{
          position: 'relative',
          left: '50%',
          margin: '20px 0',
        }}
      />
      <SnackBar
        open={true}
        snackBarType="positive"
        snackBarText="등록이 완료되었습니다 등록이 완료되었습니다등록이 완료되었습니다"
        iconType="check_round_small"
        textType="body3_line"
        fullWidth={false}
        closeSnackBar={() => console.log('닫힘')}
        customStyle={{
          position: 'relative',
          left: '50%',
          margin: '20px 0',
        }}
      />
      <SnackBar
        open={true}
        snackBarType="negative"
        snackBarText="건물 주소를 검색해주세요"
        iconType="error_round_small"
        textType="body3"
        fullWidth={false}
        closeSnackBar={() => console.log('닫힘')}
        customStyle={{
          position: 'relative',
          left: '50%',
          margin: '20px 0',
        }}
      />
      <SnackBar
        open={true}
        snackBarType="negative"
        snackBarText="건물 주소를 검색해주세요 건물 주소를 검색해주세요 건물 주소를 검색해주세요"
        iconType="error_round_small"
        textType="body3_line"
        fullWidth={false}
        closeSnackBar={() => console.log('닫힘')}
        customStyle={{
          position: 'relative',
          left: '50%',
        }}
      />
    </StoryContainer>
  );
};

export const DesignQATemplate = TemplateThree.bind({});
DesignQATemplate.args = {};

const StoryContainer = styled.div`
  width: 100%;
  position: relative;
`;
