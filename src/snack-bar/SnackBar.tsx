import styled from 'styled-components';
import theme from '../styles/theme';
import { TextType } from '../Typography/Typo';
import { assginText } from '../advanced-button/Button';
import { default as Icon, IconType } from '../dgdr-Icon/Icon';
import { useEffect } from 'react';

type colorChipType = {
  snackBarText: string;
  snackBarBackground: string;
  snackBarIcon: string;
};

export interface SnackBarProps {
  /** SnackBar 상태입니다. */
  open: boolean;
  /** SnackBar 타입입니다. */
  snackBarType: 'positive' | 'negative';
  /** SnackBar에 들어갈 텍스트입니다. */
  snackBarText: string;
  /** SnackBar에 들어갈 텍스트 타입 입니다. */
  textType: TextType;
  /** SnackBar 애니메이션 시간입니다. */
  durationTime?: number;
  /** SnackBar의 너비를 나타냅니다. */
  fullWidth?: boolean;
  /** SnackBar 아이콘 타입을 나타냅니다. */
  iconType?: IconType;
  /** SnackBar를 닫는 함수 입니다. */
  closeSnackBar: () => void;
  /** custom 스타일 */
  customStyle?: any;
}

function assignSnackBarColor(type: 'positive' | 'negative'): colorChipType {
  const colorChip = {
    positive: {
      snackBarText: theme.palette.grey[800],
      snackBarBackground: theme.palette.sub.green,
      snackBarIcon: theme.palette.main.green,
    },
    negative: {
      snackBarText: theme.palette.main.orangeRed,
      snackBarBackground: theme.palette.sub.orangeRed,
      snackBarIcon: theme.palette.main.orangeRed,
    },
  };

  return colorChip[type];
}

export default function SnackBar({
  open,
  snackBarType = 'positive',
  snackBarText,
  textType = 'body3',
  fullWidth = false,
  iconType = 'check_round_small',
  closeSnackBar,
  durationTime = 3000,
  customStyle,
}: SnackBarProps) {
  useEffect(() => {
    let timer = setTimeout(() => {
      closeSnackBar();
    }, durationTime);

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <SnackBarContainer fullWidth={fullWidth} open={open} style={customStyle}>
      <h1 className="visually-hidden">SnackBar</h1>
      <SnackBarMain snackBarType={snackBarType} textType={textType}>
        <Icon
          icon={iconType}
          color={assignSnackBarColor(snackBarType).snackBarIcon}
          customStyle={{ marginRight: '4px' }}
        />
        <p>{snackBarText}</p>
      </SnackBarMain>
    </SnackBarContainer>
  );
}

const SnackBarContainer = styled.article<{ fullWidth: boolean; open: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: ${(props) => (props.fullWidth ? '100%' : '360px')};
  padding: 0 16px;
  background-color: transparent;
  transform: ${(props) =>
    props.open
      ? 'translateX(-50%) translate3d(0,-24px,0)'
      : 'translateX(-50%) translate3d(0,100%,0)'};
  transition: transform 0.5s ease-in-out;
`;

const SnackBarMain = styled.div<{
  snackBarType: 'positive' | 'negative';
  textType: TextType;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 14px 16px;
  background-color: ${(props) =>
    assignSnackBarColor(props.snackBarType).snackBarBackground};
  border-radius: 16px;
  p {
    flex: 1;
    ${(props) => assginText(props.textType)};
    color: ${(props) => assignSnackBarColor(props.snackBarType).snackBarText};
  }
`;
