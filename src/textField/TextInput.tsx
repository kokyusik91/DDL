import { ReactNode } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Icon from '../dgdr-Icon/Icon';
import theme from '../styles/theme';
import InputLabel from '../input-label/InputLabel';

type TextInputProps = {
  /** Input의 너비 입니다. */
  fullWidth?: boolean;
  /** Input에 들어갈 아이콘 컴포넌트 입니다 */
  icon?: ReactNode;
  /** Input에 들어갈 placeholder 입니다. */
  placeholder?: string;
  /** Input의 현재 상태입니다. */
  status?: 'isSucess' | 'isError';
  /** Input의 에러 메세지 입니다. */
  errorMsg?: string;
  /** Input 컴포넌트 입니다. */
  children: ReactNode;
};

export default function TextInput({
  fullWidth = false,
  status,
  errorMsg,
  children,
}: TextInputProps) {
  return (
    <>
      <InputContainer fullWidth={fullWidth}>
        {children}
        {status && (
          <Icon
            icon={status === 'isSucess' ? 'check' : 'close_round_small'}
            color={
              status === 'isSucess'
                ? theme.palette.main.green
                : theme.palette.grey[500]
            }
          />
        )}
      </InputContainer>
      {status === 'isError' && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </>
  );
}

const InputContainer = styled.div<{ fullWidth: boolean }>`
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
`;

const ErrorMessage = styled.strong`
  margin-left: 16px;
  margin-top: 8px;
  display: block;
  ${({ theme }) => theme.typography.body3};
  color: ${({ theme }) => theme.palette.main.orangeRed};
`;
