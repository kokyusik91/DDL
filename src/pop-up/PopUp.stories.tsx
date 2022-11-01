import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';
import ButtonGroup from '../advanced-button-group/ButtonGroup';
import Button from '../advanced-button/Button';
import Icon from '../dgdr-Icon/Icon';
import PopUp from './PopUp';

export default {
  title: 'component/pop-up',
  component: PopUp,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 PopUp을 정의 합니다.',
  },
} as Meta<typeof PopUp>;

const Template: ComponentStory<typeof PopUp> = (args) => {
  return <PopUp {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  popUpTitle: '타이틀',
  popUpContent: '바디 텍스트 바디 텍스트 바디 텍스트 바디 텍스트',
  button: (
    <>
      <Button
        buttonColor="Green"
        onClick={() => {
          alert('버튼 클릭!');
        }}
        fullWidth
      >
        확인
      </Button>
    </>
  ),
  icon: <Icon icon="close_big" />,
};

export const Multiple = Template.bind({});
Multiple.args = {
  popUpTitle: '타이틀',
  popUpContent: '바디 텍스트 바디 텍스트 바디 텍스트 바디 텍스트',
  button: (
    <>
      <ButtonGroup gap={16} fullWidth>
        <Button
          buttonColor="White"
          onClick={() => {
            alert('버튼 클릭!');
          }}
          fullWidth
        >
          부정
        </Button>
        <Button
          buttonColor="Green"
          onClick={() => {
            alert('버튼 클릭!');
          }}
          fullWidth
        >
          확인
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const noTitle = Template.bind({});
noTitle.args = {
  popUpTitle: '타이틀',
  button: (
    <>
      <Button
        buttonColor="Green"
        onClick={() => {
          alert('버튼 클릭!');
        }}
        fullWidth
      >
        확인
      </Button>
    </>
  ),
  icon: <Icon icon="close_big" />,
};

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof PopUp> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <PopUp
          popUpTitle="타이틀"
          popUpContent="바디 텍스트 바디 텍스트 바디 텍스트 바디 텍스트"
          button={
            <Button
              buttonColor="Green"
              onClick={() => {
                alert('버튼 클릭!');
              }}
              fullWidth
            >
              확인
            </Button>
          }
          fullWidth={false}
          icon={<Icon icon="close_big" />}
        />
      </li>
      <li>
        <PopUp
          popUpTitle="타이틀"
          popUpContent="바디 텍스트 바디 텍스트 바디 텍스트 바디 텍스트"
          button={
            <ButtonGroup gap={16} fullWidth>
              <Button
                buttonColor="White"
                onClick={() => {
                  alert('버튼 클릭!');
                }}
                fullWidth
              >
                부정
              </Button>
              <Button
                buttonColor="Green"
                onClick={() => {
                  alert('버튼 클릭!');
                }}
                fullWidth
              >
                확인
              </Button>
            </ButtonGroup>
          }
          fullWidth={false}
        />
      </li>
      <li>
        <PopUp
          popUpTitle="타이틀"
          button={
            <Button
              buttonColor="Green"
              onClick={() => {
                alert('버튼 클릭!');
              }}
              fullWidth
            >
              확인
            </Button>
          }
          fullWidth={false}
          icon={<Icon icon="close_big" />}
        />
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
