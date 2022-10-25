import Typo from './Typo';

// CSF 방식 : 어떤 컴포넌트의 문서인지, 그리고 어떤 설정을 적용할 것인지 정의한다.
export default {
  title: 'resources/Typography', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Typo, // 어떤 컴포넌트를 문서화 할지 명시
  parameters: {
    componentSubtitle: 'DGDR 서비스에서 사용하는 타이포 그래프를 정의합니다.',
  },
};

export const typoBasic = () => {
  return (
    <div>
      <Typo type={'h1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'h2'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'h3'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body1_M'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body2'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body3'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body3_M'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub1_M'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub2'}>동거동락 임대인 서비스!</Typo>
    </div>
  );
};

export const typoLine = () => {
  return (
    <div>
      <Typo type={'h1_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'h2_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'h3_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'body1_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'body1_M_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'body2_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'body3_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'body3_M_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'sub1_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'sub1_M_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
      <Typo type={'sub2_line'}>
        현재 임대 중인
        <br /> 건물을 등록해 주세요
      </Typo>
    </div>
  );
};

export const typoNumber = () => {
  return (
    <div>
      <Typo type={'h1'} isNumber>
        1,000,000
      </Typo>
      <Typo type={'h2'} isNumber>
        2,000,000
      </Typo>
      <Typo type={'h3'} isNumber>
        3,000,000
      </Typo>
      <Typo type={'body1'} isNumber>
        4,000,000
      </Typo>
      <Typo type={'body1_M'} isNumber>
        5,000,000
      </Typo>
      <Typo type={'body2'} isNumber>
        6,000,000
      </Typo>
      <Typo type={'body3'} isNumber>
        7,000,000
      </Typo>
      <Typo type={'body3_M'} isNumber>
        8,000,000
      </Typo>
      <Typo type={'sub1'} isNumber>
        9,000,000
      </Typo>
      <Typo type={'sub1_M'} isNumber>
        10,000,000
      </Typo>
      <Typo type={'sub2'} isNumber>
        11,000,000
      </Typo>
    </div>
  );
};

typoBasic.story = {
  name: 'Basic',
};

typoNumber.story = {
  name: 'Number',
};

typoLine.story = {
  name: 'Line',
};
