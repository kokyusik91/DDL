import styled from 'styled-components';
import theme from '../styles/theme';
import { assginText } from '../advanced-button/Button';
import { TextType } from '../Typography/Typo';
import { default as Icon, IconType } from '../dgdr-Icon/Icon';

/**
 * 개선사항 : 아이콘을 뒤에다만 붙였는데, 앞에다 붙였다 뒤에다 붙였다 할 수 있도록 만들어야한다.
 */

export type IconButtonProps = {
  /** Icon-button에 들어갈 텍스트 입니다. */
  children: string;
  /** Icon-button의 색상 입니다. */
  buttonColor: 'Green' | 'Red';
  /** Icon-button의 너비를 나타냅니다. */
  fullWidth: boolean;
  /** Icon-button에 들어갈 텍스트 사이즈 입니다. */
  textType?: TextType;
  /** Icon-button에 들어갈 왼쪽 아이콘 타입 입니다. */
  startIcon?: IconType;
  /** Icon-button에 들어갈 오른쪽 아이콘 타입 입니다. */
  endIcon: IconType;
};

function assignIconButtonColor(colorType: 'Green' | 'Red') {
  const colorChip = {
    Green: {
      backgroundColor: theme.palette.sub.green,
      textColor: theme.palette.main.green,
    },
    Red: {
      backgroundColor: theme.palette.sub.orangeRed,
      textColor: theme.palette.main.orangeRed,
    },
  };
  return colorChip[colorType];
}

function IconButton({
  children,
  buttonColor,
  fullWidth = false,
  textType = 'body1_M',
  startIcon,
  endIcon = 'close_round_small',
}: IconButtonProps) {
  return (
    <IconButtonWrapper
      buttonColor={buttonColor}
      fullWidth={fullWidth}
      textType={textType}
    >
      {startIcon && (
        <Icon
          icon={startIcon}
          color={assignIconButtonColor(buttonColor).textColor}
          customStyle={{ marginRight: '4px' }}
        />
      )}
      {children}
      {endIcon && (
        <Icon
          icon={endIcon}
          color={assignIconButtonColor(buttonColor).textColor}
          customStyle={{ marginLeft: '4px' }}
        />
      )}
    </IconButtonWrapper>
  );
}

const IconButtonWrapper = styled.button<{
  buttonColor: 'Green' | 'Red';
  fullWidth: boolean;
  textType: TextType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  padding: 15px 0;
  border-radius: 14px;
  background-color: ${(props) =>
    assignIconButtonColor(props.buttonColor).backgroundColor};
  ${(props) => assginText(props.textType)};
  color: ${(props) => assignIconButtonColor(props.buttonColor).textColor};
`;

export default IconButton;
