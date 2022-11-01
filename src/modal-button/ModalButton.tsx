import { ReactNode } from 'react';
import styled from 'styled-components';

interface ModalButtonProps {
  /** `Single-button` 혹은 `Multiple-button` 컴포넌트가 들어옵니다. */
  children: ReactNode;
  /** Modal-button의 너비를 나타냅니다. */
  fullWidth: boolean;
}

export default function ModalButton({
  children,
  fullWidth = false,
}: ModalButtonProps) {
  return (
    <ModalButtonContainer fullWidth={fullWidth}>
      {children}
    </ModalButtonContainer>
  );
}

const ModalButtonContainer = styled.div<{ fullWidth: boolean }>`
  display: inline-block;
  width: ${(props) => (props.fullWidth ? '100%' : '312px')};
  padding: 68px 20px 20px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.grey[500]};
`;
