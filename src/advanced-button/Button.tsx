import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { default as Typo, TextType } from '../Typography/Typo';
import { default as Icon, IconType } from '../dgdr-Icon/Icon';

type mainColor = 'Green' | 'Red' | 'White';

interface ButtonProps {
  /** 버튼에 들어갈 내용 */
  children: string;
  /** 버튼 색상 */
  buttonColor: mainColor;
  /** 버튼 너비 */
  fullWidth: boolean;
  /** 클릭 함수 */
  onClick: () => void;
  /** 버튼 비활성화 */
  disabled?: boolean;
  /** 텍스트 사이즈 */
  textType?: TextType;
}

function assignButtonColor(colorType: mainColor): string {
  const colorChip = {
    Green: theme.palette.main.green,
    Red: theme.palette.main.orangeRed,
    White: theme.palette.grey[100],
  };

  return colorChip[colorType];
}

function assginText(textType: TextType) {
  return theme.typography[textType];
}

/**
 *
 * 버튼을 정의한다!
 *
 */

export default function Button({
  children,
  buttonColor,
  fullWidth = true,
  onClick,
  disabled = false,
  textType = 'body1_M',
}: ButtonProps) {
  return (
    <DDLButton
      buttonColor={buttonColor}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      textType={textType}
    >
      {children}
    </DDLButton>
  );
}

const DDLButton = styled.button<{
  buttonColor: mainColor;
  fullWidth: boolean;
  textType: TextType;
  disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  padding: 16px;
  background-color: ${(props) =>
    props.disabled
      ? theme.palette.grey[300]
      : assignButtonColor(props.buttonColor)};
  border: none;
  border-radius: 14px;
  cursor: pointer;
  ${(props) => assginText(props.textType)};
  color: ${(props) =>
    props.buttonColor === 'White' || props.disabled
      ? theme.palette.grey[600]
      : theme.palette.grey[100]};
`;
