import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '../input-label/InputLabel';
import theme from '../styles/theme';

type TextInputProps = {
  /** Input에 들어갈 placeholder 입니다. */
  placeholder?: string;
  /** Input의 현재 상태입니다. */
  status?: 'isSucess' | 'isError';
  disabled?: boolean;
  label?: ReactNode;
};

const assignInputBorderColor = (status: 'isSucess' | 'isError') => {
  const colorChip = {
    isSucess: theme.palette.main.green,
    isError: theme.palette.main.orangeRed,
  };

  return colorChip[status];
};

function BasicInput({
  placeholder = 'placeholder',
  status,
  disabled,
  label,
}: TextInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      {label}
      <CustomInput
        value={value}
        placeholder={placeholder}
        status={status}
        onChange={(e: any) => setValue(e.target.value)}
        disabled={disabled}
      />
    </>
  );
}

const CustomInput = styled.input<{
  status?: 'isSucess' | 'isError';
  disabled?: boolean;
}>`
  width: 100%;
  padding: 16px 56px 16px 16px;
  border-radius: 14px;
  ${({ theme }) => theme.typography.body1};
  color: ${(props) =>
    !props.disabled ? theme.palette.grey[800] : theme.palette.grey[500]};
  background-color: ${(props) =>
    !props.disabled ? theme.palette.grey[100] : theme.palette.grey[200]};
  caret-color: ${(props) =>
    props.status === 'isError'
      ? theme.palette.main.orangeRed
      : theme.palette.main.green};
  border: 1px solid
    ${(props) =>
      props.status
        ? assignInputBorderColor(props.status)
        : theme.palette.grey[300]};
  ${(props) => props.disabled && `border : none`};
  &::placeholder {
    color: ${(props) =>
      !props.disabled ? theme.palette.grey[500] : theme.palette.grey[600]};
  }
`;

export default BasicInput;
