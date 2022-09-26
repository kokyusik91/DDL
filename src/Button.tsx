import styled from 'styled-components';


interface ButtonProps {
    /** 버튼 텍스트 */
    label: string;
    /** 버튼 사이즈 */
    size: 'small' | 'large';
    /** 버튼 상태 */
    disabled: boolean;
      /** 버튼 클릭시 동작 */
    onClick?: () => void;
}

/**
 * DDL의 기본 버튼 컴포넌트 입니다
 *
 * - `size` 값을 `large`로 설정하면 버튼이 **크게** 나타납니다. 기본값은 `small` 입니다.
 * - `isActive` 값을 `active`로 설정하면 버튼이 **활성화** 됩니다. 기본값은 `active` 입니다.
 * - `onClick` 속성은 버튼을 클릭했을때 실행시킬 콜백함수를 넘길수 있습니다.
 */

export default function Button({ label = 'button', size = 'large', disabled= false, ...props }: ButtonProps) {
  
  const onClick = () => {
    alert("버튼 클릭!");
  }

  return (
    <Styled.Button size={size} active={disabled} onClick={onClick}>
     <div className="button" role="button" {...props}>
                {label}
      </div>
    </Styled.Button>
  )
}


const Styled = {
  Button: styled.button<{size : 'small' | 'large', active : boolean}>`
    display: flex; 
    justify-content: center;
    align-items: center;
    border : none;
    border-radius : 14px;
    width: ${({ size }) => (size === 'large' ? '328px' : '156px')};
    background-color: ${({active}) => (active === true ? '#00D4AA' : '#F0F0F0')};
    .button{
            width : 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            cursor: pointer;
            color : ${({active}) => (active === true ? '#ffffff' : '#ABABAB')};
            text-align: center;
            font-size: 17px;
            font-weight : 500;
        }
  `
}