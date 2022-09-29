import Typo from './Typo';

export default {
  title: 'stories/Typography',
  component: Typo,
};

export const typoBasic = () => {
  return (
    <div>
      <Typo type={'h1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'h2'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'h3'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body2'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body3'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub1'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub2'}>동거동락 임대인 서비스!</Typo>
    </div>
  );
};

export const typoM = () => {
  return (
    <div>
      <Typo type={'body1_M'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'body3_M'}>동거동락 임대인 서비스!</Typo>
      <Typo type={'sub1_M'}>동거동락 임대인 서비스!</Typo>
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

typoBasic.story = {
  name: 'Typo-Basic',
};

typoM.story = {
  name: 'Typo-M',
};

typoLine.story = {
  name: 'Typo-Line',
};
