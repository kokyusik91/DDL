import { ReactNode } from 'react';
import styled from 'styled-components';

export type IconButtonProps = {
  icon: ReactNode;
  color: string;
  text: string;
};

function IconButton({ icon, color, text }: IconButtonProps) {
  return (
    <IconButtonWrapper color={color}>
      {text}
      {icon}
    </IconButtonWrapper>
  );
}

const IconButtonWrapper = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
`;

export default IconButton;
