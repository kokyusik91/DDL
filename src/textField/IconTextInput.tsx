import { useState } from 'react';
import styled from 'styled-components';
import Icon from '../dgdr-Icon/Icon';
import theme from '../styles/theme';

type TextInputProps = {
  /** Input에 들어갈 placeholder 입니다. */
  placeholder?: string;
  /** Input의 현재 상태입니다. */
  status?: 'isSucess' | 'isError';
  /** Input에 들어갈 아이콘 컴포넌트 입니다 */
  fullWidth?: boolean;
};

function IconTextInput({
  placeholder = 'placeholder',
  status,
  fullWidth = false,
}: TextInputProps) {
  const [value, setValue] = useState('');

  return (
    <IconInputWrapper fullWidth={fullWidth}>
      <CustomInput
        value={value}
        placeholder={placeholder}
        status={status}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <Icon icon="email" color={assignInputBorderColor(status)} />
    </IconInputWrapper>
  );
}

const assignInputBorderColor = (status: 'isSucess' | 'isError' | undefined) => {
  if (status === undefined) return theme.palette.grey[500];
  const colorChip = {
    isSucess: theme.palette.main.green,
    isError: theme.palette.main.orangeRed,
  };

  return colorChip[status];
};

const CustomInput = styled.input<{
  status?: 'isSucess' | 'isError';
}>`
  position: relative;
  width: 100%;
  padding: 16px 56px 16px 48px;
  border-radius: 14px;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.palette.grey[800]};
  background-color: ${({ theme }) => theme.palette.grey[100]};
  caret-color: ${(props) =>
    props.status === 'isError'
      ? theme.palette.main.orangeRed
      : theme.palette.main.green};
  border: 1px solid
    ${(props) =>
      props.status
        ? assignInputBorderColor(props.status)
        : theme.palette.grey[300]};
  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const IconInputWrapper = styled.div<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  position: relative;
  svg {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default IconTextInput;
