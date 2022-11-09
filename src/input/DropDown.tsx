import styled from 'styled-components';

type DropDownProps = {
  title: string;
};

function DropDown({ title }: DropDownProps) {
  return (
    <DropDownContainer>
      <h1>{title}</h1>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[100]};

  & > h1 {
    color: ${({ theme }) => theme.palette.grey[800]};
    ${({ theme }) => theme.typography.body1};
  }
`;

export default DropDown;
