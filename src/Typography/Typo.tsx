import { ReactNode } from 'react';
import styled from 'styled-components';
import typography from '../styles/theme/typography';

interface TypoProps {
  /** 텍스트 */
  children: string | ReactNode;
  /** 텍스트 타입 */
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body1_M'
    | 'body2'
    | 'body3'
    | 'body3_M'
    | 'sub1'
    | 'sub1_M'
    | 'sub2'
    | 'h1_line'
    | 'h2_line'
    | 'h3_line'
    | 'body1_line'
    | 'body1_M_line'
    | 'body2_line'
    | 'body3_line'
    | 'body3_M_line'
    | 'sub1_line'
    | 'sub1_M_line'
    | 'sub2_line';
}

/**
 * DDL의 타이포 그래피 입니다
 *
 * **Typo-Basic 스펙**
 * - h1 : `font-weight: 700` `font-size: 24px` `line-height: 30px` `letter-spacing: -0.75px`
 * - h2 : `font-weight: 500` `font-size: 21px` `line-height: 26px` `letter-spacing: -0.75px`
 * - h3 : `font-weight: 500` `font-size: 19px` `line-height: 24px` `letter-spacing: -0.75px`
 * - body1 : `font-weight: 400` `font-size: 17px` `line-height: 22px` `letter-spacing: -0.75px`
 * - body1_M : `font-weight: 500` `font-size: 17px` `line-height: 22px` `letter-spacing: -0.75px`
 * - body2 : `font-weight: 400` `font-size: 16px` `line-height: 20px` `letter-spacing: -0.5px`
 * - body3 : `font-weight: 400` `font-size: 14px` `line-height: 18px` `letter-spacing: 0px`
 * - body3_M : `font-weight: 500` `font-size: 14px` `line-height: 18px` `letter-spacing: 0px`
 * - sub1 : `font-weight: 400` `font-size: 12px` `line-height: 16px` `letter-spacing: 0px`
 * - sub1_M : `font-weight: 500` `font-size: 12px` `line-height: 16px` `letter-spacing: 0px`
 * - sub2 : `font-weight: 400` `font-size: 9px` `line-height: 12px` `letter-spacing: 0px`



 * **Typo-Line 스펙**
 * - h1_line : `font-weight: 700` `font-size: 24px` `line-height: 34px` `letter-spacing: -0.75px`
 * - h2_line : `font-weight: 500` `font-size: 21px` `line-height: 30px` `letter-spacing: -0.75px`
 * - h3_line : `font-weight: 500` `font-size: 19px` `line-height: 28px` `letter-spacing: -0.75px`
 * - body1_line : `font-weight: 400` `font-size: 17px` `line-height: 25px` `letter-spacing: -0.75px`
 * - body1_M_line : `font-weight: 500` `font-size: 17px` `line-height: 25px` `letter-spacing: -0.75px`
 * - body2_line : `font-weight: 400` `font-size: 16px` `line-height: 23px` `letter-spacing: -0.5px`
 * - body3_line : `font-weight: 400` `font-size: 14px` `line-height: 21px` `letter-spacing: 0px`
 * - body3_M_line : `font-weight: 500` `font-size: 14px` `line-height: 21px` `letter-spacing: 0px`
 * - sub1_line : `font-weight: 400` `font-size: 12px` `line-height: 18px` `letter-spacing: 0px`
 * - sub1_M_line : `font-weight: 500` `font-size: 12px` `line-height: 18px` `letter-spacing: 0px`
 * - sub2_line : `font-weight: 400` `font-size: 9px` `line-height: 14px` `letter-spacing: 0px`
 */

export default function Typo({ children, type }: TypoProps) {
  const extractValue = typography[type];

  return (
    <TypoContainer font={extractValue}>
      <h2>{type}</h2> {children}
    </TypoContainer>
  );
}

const TypoContainer = styled.h1<{ font: string }>`
  ${(props) => props.font}
  margin-bottom: 16px;
  h2 {
    ${(props) => props.font}
  }
`;
