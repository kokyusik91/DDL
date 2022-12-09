import styled from 'styled-components';
import { mainColor, assignButtonColor } from '../advanced-button/Button';
import { default as Icon, IconType } from '../dgdr-Icon/Icon';
import theme from '../styles/theme';

type FabButtonProps = {
  /** FAB-button의 색상 입니다. */
  buttonColor: 'Green' | 'Red';
  /** FAB-button에 들어갈 아이콘 타입입니다. */
  iconType: IconType;
  /** FAB-button에 들어갈 아이콘 색상입니다. */
  iconColor: string;
};
//

export default function FabButton({
  buttonColor,
  iconType = 'plus_big',
  iconColor = theme.palette.common.white,
}: FabButtonProps) {
  return (
    <FabButtonContainer buttonColor={buttonColor}>
      <Icon icon={iconType} color={iconColor} />
    </FabButtonContainer>
  );
}

const FabButtonContainer = styled.button<{ buttonColor: mainColor }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: ${(props) => assignButtonColor(props.buttonColor)};
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.grey[100]};
`;
