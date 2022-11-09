import styled from 'styled-components';

type InputLabelProps = {
  essential?: boolean;
  text: string;
  htmlFor: string;
};

function InputLabel({ essential, text, htmlFor }: InputLabelProps) {
  return (
    <CustomLabel htmlFor={htmlFor}>
      <h1>{text}</h1>
      {essential && <span>•</span>}
    </CustomLabel>
  );
}

const CustomLabel = styled.label`
  display: flex;
  margin-left: 16px;
  margin-bottom: 4px;
  text-align: start;

  h1 {
    ${({ theme }) => theme.typography.body3};
    color: ${({ theme }) => theme.palette.grey[700]};
  }

  & > span {
    color: ${({ theme }) => theme.palette.main.green};
  }
`;

export default InputLabel;
