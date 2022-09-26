import styled from 'styled-components';

interface ButtonGroupProps {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap: string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
}

/**
 * DDL의 기본 버튼 그룹 컴포넌트 입니다
 *
 * - `direction` 값을 `row`로 설정하면 버튼이 **가로 배치** 됩니다. 'column'로 설정하면 버튼이 **세로 배치** 됩니다. 기본값은 `row` 입니다.
 * - `gap` 값을 `active`로 설정하면 버튼이 **활성화** 됩니다. 기본값은 `active` 입니다.
 * - `onClick` 속성은 버튼을 클릭했을때 실행시킬 콜백함수를 넘길수 있습니다.
 */

export default function ButtonGroup({
  direction = 'row',
  gap = '16px',
  children,
}: ButtonGroupProps) {
  return (
    <DDLButtonGroup direction={direction} gap={gap}>
      {children}
    </DDLButtonGroup>
  );
}

const DDLButtonGroup = styled.div<{ direction: string; gap: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};

  button:first-child {
    margin-right: ${(props) => props.gap};
  }
`;
