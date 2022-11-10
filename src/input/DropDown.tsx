import styled from 'styled-components';
import Icon, { IconType } from '../dgdr-Icon/Icon';

type DropDownProps = {
  title: string;
  icon: IconType;
  fullWidth?: boolean;
};

function DropDown({ title, icon, fullWidth = false }: DropDownProps) {
  return (
    <DropDownContainer fullWidth={fullWidth}>
      <h1>{title}</h1>
      <Icon icon={icon} />
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div<{ fullWidth?: boolean }>`
  display: relative;
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.grey[100]};

  & > svg {
    position: absolute;
    right: 0;
    top: 50%;
  }

  & > h1 {
    color: ${({ theme }) => theme.palette.grey[800]};
    ${({ theme }) => theme.typography.body1};
  }
`;

export default DropDown;
