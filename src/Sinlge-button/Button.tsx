import styled from 'styled-components';

interface ButtonProps {
  /** 버튼 텍스트 */
  text: string;
  /** 버튼 상태 */
  disabled: boolean;
  /** 버튼 색상 */
  color: 'green' | 'red' | 'white';
  /** 버튼 클릭시 동작 */
  onClick?: () => void;
  /** 버튼 width 설정 fullWidth true면 width : 100% */
  fullWidth?: boolean;
}

function classifyType(colorType: 'green' | 'red' | 'white') {
  let answer = '';
  switch (colorType) {
    case 'red':
      answer = `background-color : #FE6A6A; color : #ffffff;`;
      break;
    case 'green':
      answer = `background-color : #00D4AA; color : #ffffff;`;
      break;
    case 'white':
      answer = `background-color : #ffffff; color : #ABABAB;`;
      break;
  }
  return answer;
}

/**
 *
 * - `size` 값을 `large`로 설정하면 버튼이 **크게** 나타납니다. 기본값은 `small` 입니다.
 * - `isActive` 값을 `active`로 설정하면 버튼이 **활성화** 됩니다. 기본값은 `active` 입니다.
 * - `onClick` 속성은 버튼을 클릭했을때 실행시킬 콜백함수를 넘길수 있습니다.
 */

export default function Button({
  text = '버튼',
  disabled = false,
  color = 'green',
  onClick,
  fullWidth = true,
  ...props
}: ButtonProps) {
  return (
    <DDLButton
      active={disabled}
      onClick={onClick}
      color={classifyType(color)}
      fullWidth={fullWidth}
      disabled
    >
      {text}
    </DDLButton>
  );
}

const DDLButton = styled.button<{
  active: boolean;
  color: string;
  fullWidth?: boolean;
}>`
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 14px;
  ${({ theme }) => theme.typography.h3};

  cursor: pointer;
  ${(props) => props.color};
  background-color: ${(props) => (props.active ? '#F0F0F0' : props.color)};
  color: ${(props) => (props.active ? '#ABABAB' : props.color)};
`;
