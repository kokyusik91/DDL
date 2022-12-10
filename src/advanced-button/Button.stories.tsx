import { ComponentStory, Meta } from '@storybook/react';
import styled from 'styled-components';

import Button from './Button';

export default {
  title: 'button/Single-button',
  component: Button,
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 버튼을 정의합니다.',
  },
  // decorators를 추가하니 No Display Name이라고 나옴....
  // decorators: [(Story) => <Story />],
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  // arg에는 각각의 Template에 bind 한 값이 들어간다.
  console.log('args', args);
  return <Button {...args} />;
};

export const Green = Template.bind({});
Green.args = {
  children: '확인',
  buttonColor: 'Green',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const Red = Template.bind({});
Red.args = {
  children: '확인',
  buttonColor: 'Red',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const White = Template.bind({});
White.args = {
  children: '확인',
  buttonColor: 'White',
  fullWidth: false,
  onClick: () => alert('버튼 클릭!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '확인',
  buttonColor: 'White',
  fullWidth: false,
  disabled: true,
  onClick: () => alert('버튼 클릭!'),
};

// 이렇게 하면 뭐 컨트롤을 할 수 없네?!
// export const Green = () => (
//   <Button
//     buttonColor="Green"
//     fullWidth={false}
//     onClick={() => alert('버튼클릭!')}
//   >
//     Button
//   </Button>
// );

// 디자이너에게 보여주는 템플릿
const DesignTemplate: ComponentStory<typeof Button> = () => {
  return (
    <DesginTemplateContainer>
      <li>
        <Button
          buttonColor="Green"
          fullWidth={false}
          onClick={() => alert('버튼 클릭!')}
        >
          확인
        </Button>
      </li>
      <li>
        <Button
          buttonColor="Red"
          fullWidth={false}
          onClick={() => alert('버튼 클릭!')}
        >
          확인
        </Button>
      </li>
      <li>
        <Button
          buttonColor="White"
          fullWidth={false}
          onClick={() => alert('버튼 클릭!')}
        >
          확인
        </Button>
      </li>
      <li>
        <Button
          buttonColor="Green"
          fullWidth={false}
          onClick={() => alert('버튼 클릭!')}
          disabled
        >
          확인
        </Button>
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
