import { ReactNode } from 'react';
import styled from 'styled-components';

type BottomSheetButtonProps = {
  /** `Single-button`컴포넌트가 들어옵니다. */
  children: ReactNode;
  /** BottomSheet-button의 너비를 나타냅니다. */
  fullWidth: boolean;
};

export default function BottomSheetButton({
  children,
  fullWidth = false,
}: BottomSheetButtonProps) {
  return (
    <BomttomSheetButtonContainer fullWidth={fullWidth}>
      {children}
    </BomttomSheetButtonContainer>
  );
}
// 바텀 sheet 만들어야함!
const BomttomSheetButtonContainer = styled.div<{ fullWidth: boolean }>`
  position: relative;
  display: inline-flex;
  width: ${(props) => (props.fullWidth ? '100%' : '360px')};
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 0 16px 16px 16px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: -24px;
    height: 24px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
  }
`;
