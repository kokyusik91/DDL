import styled from 'styled-components';
import theme from '../styles/theme';

function Typo({ fontStyle }: any) {
  return (
    <TypoContainer fstyle={fontStyle}>
      현대 임대중인 건물을 등록해 주세요!
    </TypoContainer>
  );
}

const TypoContainer = styled.h1<{ fstyle: string }>`
  ${(props) => props.fstyle}
  ${({ theme }) => theme.palette.grey[600]}
`;

export default Typo;
