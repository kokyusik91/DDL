import styled from 'styled-components';
import { mainColor, assignButtonColor } from '../advanced-button/Button';
import { default as Icon, IconType } from '../dgdr-Icon/Icon';
import theme from '../styles/theme';

interface FabButtonProps {
  /** FAB button 색상 */
  buttonColor: 'Green' | 'Red';
  /** 아이콘 이름 */
  iconType: IconType;
  /** 아이콘 색상 */
  iconColor: string;
}
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
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.grey[100]};
`;
