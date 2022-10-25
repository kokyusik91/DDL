import styled from 'styled-components';

interface ColorProps {
  colorValue: string;
  colorName: string;
}

/**
 *
 *
 * - dgdr_deep_green : `#18806A`
 * - dgdr_green : `#00D4AA`
 * - dgdr_orangered : `#FE6A6A`
 * - dgdr_blue : `#467FF7`
 * - dgdr_purple : `#BB39FA`
 * - dgdr_yellow : `#FCB707`
 * - dgdr_sub_green : `#E6FBF7`
 * - dgdr_sub_orangered : `#FFF0F0`
 * - dgdr_sub_blue : `#EDF2FE`
 * - dgdr_sub_purple : `#F2E5F8`
 * - dgdr_sub_yellow : `#FFF5D6`
 * - dgdr_100 : `#FFFFFF`
 * - dgdr_200 : `#F8F8F8`
 * - dgdr_300 : `#F0F0F0`
 * - dgdr_400 : `#DFDFDF`
 * - dgdr_500 : `#C9C9C9`
 * - dgdr_600 : `#ABABAB`
 * - dgdr_700 : `#797979`
 * - dgdr_800 : `#2F3E39`
 */

export default function Color({ colorValue, colorName }: ColorProps) {
  return (
    <>
      <ColorContainer>
        <ColorChip colorCode={colorValue} />
        <h1>{`${colorName}`}</h1>
        <h2>{`${colorValue}`}</h2>
      </ColorContainer>
    </>
  );
}

const ColorContainer = styled.article`
  min-width: 170px;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  margin-right: 20px;

  h1 {
    color: ${({ theme }) => theme.palette.grey[800]};
    margin-bottom: 16px;
  }

  h2 {
    margin: 0;
    ${({ theme }) => theme.typography.sub1};
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;

const ColorChip = styled.div<{ colorCode: string }>`
  width: 100%;
  height: 64px;
  border-radius: 4px;
  background-color: ${(props) => props.colorCode};
  margin-bottom: 8px;
`;
