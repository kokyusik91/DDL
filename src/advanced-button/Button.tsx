import { CSSProperties } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { default as Typo, TextType } from '../Typography/Typo';

export type mainColor = 'Green' | 'Red' | 'White';

interface ButtonProps {
  /** Single-button에 들어갈 텍스트 입니다. */
  children: string;
  /** Single-button의 색상 입니다. */
  buttonColor: mainColor;
  /** Single-button의 너비를 나타냅니다. */
  fullWidth?: boolean;
  /** Single-button의 클릭 했을때의 함수입니다. */
  onClick: () => void;
  /** Single-button의 비활성화를 나타냅니다. */
  disabled?: boolean;
  /** Single-button에 들어갈 텍스트 사이즈 입니다. */
  textType?: TextType;
  /** 커스텀 스타일 */
  customStyle?: CSSProperties;
}

export function assignButtonColor(colorType: mainColor): string {
  const colorChip = {
    Green: theme.palette.main.green,
    Red: theme.palette.main.orangeRed,
    White: theme.palette.grey[100],
  };

  return colorChip[colorType];
}

export function assginText(textType: TextType) {
  return theme.typography[textType];
}

export default function Button({
  children,
  buttonColor,
  fullWidth = true,
  onClick,
  disabled = false,
  textType = 'body1_M',
  customStyle,
}: ButtonProps) {
  return (
    <DDLButton
      buttonColor={buttonColor}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      textType={textType}
      style={customStyle}
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
