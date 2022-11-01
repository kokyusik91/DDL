import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonGroupProps {
  /** Single-button 컴포넌트가 들어옵니다. */
  children: ReactNode;
  /** 버튼 사이 간격 입니다. */
  gap: number;
  /** Multiple-button의 너비를 나타냅니다. */
  fullWidth: boolean;
}

export default function ButtonGroup({
  children,
  gap = 16,
  fullWidth = false,
}: ButtonGroupProps) {
  return (
    <ButtonGroupContainer gap={gap} fullWidth={fullWidth}>
      {children}
    </ButtonGroupContainer>
  );
}

const ButtonGroupContainer = styled.div<{ gap: number; fullWidth: boolean }>`
  display: flex;
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  button:first-child {
    margin-right: ${(props) => `${props.gap}px`};
  }
`;
