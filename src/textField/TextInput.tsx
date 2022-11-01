import { ReactNode } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  /** Input text 입니다. */
  value: string;
  /** Input의 너비 입니다. */
  fullWidth: boolean;
  /** Input에 들어갈 아이콘 컴포넌트 입니다 */
  icon?: ReactNode;
  /** Input에 들어갈 placeholder 입니다. */
  placeholder?: string;
}

export default function TextInput({
  value,
  fullWidth,
  icon,
  placeholder,
}: TextInputProps) {
  return (
    <CustomInput
      fullWidth={fullWidth}
      value={value}
      placeholder={placeholder}
    />
  );
}

const CustomInput = styled.input<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : '328px')};
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 14px;
`;
