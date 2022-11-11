import { ReactNode } from 'react';
import styled from 'styled-components';

interface PopUpProps {
  /** Pop-up 컴포넌트에 들어가는 제목입니다. */
  popUpTitle: string;
  /** Pop-up 컴포넌트에 들어가는 내용입니다. */
  popUpContent?: string;
  /** Pop-up 컴포넌트에 들어가는 버튼 컴포넌트 입니다. */
  button: ReactNode;
  /** Pop-up 컴포넌트의 너비 입니다. */
  fullWidth: boolean;
  /** Pop-up 컴포넌트 우측 상단에 들어가는 아이콘 입니다. */
  icon?: ReactNode;
}

/**
 *
 * Todo 사실 팝업 컴포넌트도 컴파운드 컴포넌트로 만들어야함.
 */
export default function PopUp({
  popUpTitle,
  popUpContent,
  button,
  fullWidth,
  icon,
}: PopUpProps) {
  return (
    <ModalContainer fullWidth={fullWidth}>
      <h1 className="visually-hidden">모달 컴포넌트</h1>
      <ModalContent hasNotContent={!popUpContent}>
        <h1>{popUpTitle}</h1>
        <p>{popUpContent}</p>
      </ModalContent>
      {button}
      <span>{icon}</span>
    </ModalContainer>
  );
}

const ModalContainer = styled.article<{ fullWidth: boolean }>`
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : '312px')};
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 20px;

  span {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const ModalContent = styled.main<{ hasNotContent: boolean }>`
  margin-bottom: 24px;

  h1,
  p {
    color: ${({ theme }) => theme.palette.grey[800]};
  }

  h1 {
    ${({ theme }) => theme.typography.h3};
    margin-bottom: ${(props) => (props.hasNotContent ? '0px' : '14px')};
  }

  p {
    ${({ theme }) => theme.typography.body2_line};
  }
`;
