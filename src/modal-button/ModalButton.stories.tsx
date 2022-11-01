import { ComponentStory, Meta } from '@storybook/react';
import Button from '../advanced-button/Button';
import ModalButton from './ModalButton';
import ButtonGroup from '../advanced-button-group/ButtonGroup';
import styled from 'styled-components';

export default {
  title: 'button/Modal-button',
  component: ModalButton,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 Modal 버튼을 정의 합니다.',
  },
} as Meta<typeof ModalButton>;

const Template: ComponentStory<typeof ModalButton> = (args) => {
  return <ModalButton {...args} />;
};

export const green_single = Template.bind({});
green_single.args = {
  children: (
    <Button
      onClick={() => {
        alert('버튼 클릭!');
      }}
      fullWidth={true}
      buttonColor="Green"
    >
      확인
    </Button>
  ),
  fullWidth: false,
};

export const green_multiple = Template.bind({});
green_multiple.args = {
  children: (
    <ButtonGroup gap={16} fullWidth={true}>
      <Button
        buttonColor="White"
        onClick={() => {
          alert('부정 클릭!');
        }}
        fullWidth={true}
      >
        부정
      </Button>
      <Button
        buttonColor="Green"
        onClick={() => {
          alert('확인 클릭!');
        }}
        fullWidth={true}
      >
        확인
      </Button>
    </ButtonGroup>
  ),
  fullWidth: false,
};

export const red_single = Template.bind({});
red_single.args = {
  children: (
    <Button
      onClick={() => {
        alert('버튼 클릭!');
      }}
      fullWidth={true}
      buttonColor="Red"
    >
      확인
    </Button>
  ),
  fullWidth: false,
};

export const red_multiple = Template.bind({});
red_multiple.args = {
  children: (
    <ButtonGroup gap={16} fullWidth={true}>
      <Button
        buttonColor="White"
        onClick={() => {
          alert('부정 클릭!');
        }}
        fullWidth={true}
      >
        부정
      </Button>
      <Button
        buttonColor="Red"
        onClick={() => {
          alert('확인 클릭!');
        }}
        fullWidth={true}
      >
        확인
      </Button>
    </ButtonGroup>
  ),
  fullWidth: false,
};

const DesignTemplate: ComponentStory<typeof ModalButton> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <ModalButton fullWidth={false}>
          <Button
            onClick={() => {
              alert('버튼 클릭!');
            }}
            fullWidth={true}
            buttonColor="Green"
          >
            확인
          </Button>
        </ModalButton>
      </li>
      <li>
        <ModalButton fullWidth={false}>
          <ButtonGroup gap={16} fullWidth={true}>
            <Button
              buttonColor="White"
              onClick={() => {
                alert('부정 클릭!');
              }}
              fullWidth={true}
            >
              부정
            </Button>
            <Button
              buttonColor="Green"
              onClick={() => {
                alert('확인 클릭!');
              }}
              fullWidth={true}
            >
              확인
            </Button>
          </ButtonGroup>
        </ModalButton>
      </li>
      <li>
        <ModalButton fullWidth={false}>
          <Button
            onClick={() => {
              alert('버튼 클릭!');
            }}
            fullWidth={true}
            buttonColor="Red"
          >
            확인
          </Button>
        </ModalButton>
      </li>
      <li>
        <ModalButton fullWidth={false}>
          <ButtonGroup gap={16} fullWidth={true}>
            <Button
              buttonColor="White"
              onClick={() => {
                alert('부정 클릭!');
              }}
              fullWidth={true}
            >
              부정
            </Button>
            <Button
              buttonColor="Red"
              onClick={() => {
                alert('확인 클릭!');
              }}
              fullWidth={true}
            >
              확인
            </Button>
          </ButtonGroup>
        </ModalButton>
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
