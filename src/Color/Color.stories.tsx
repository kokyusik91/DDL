import Color from './Color';
import theme from '../styles/theme';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

export default {
  title: 'resources/Color',
  component: Color,
  parameters: {
    componentSubtitle: 'DGDR 서비스의 기본 색상 입니다.',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Color>;

export const color = () => {
  return (
    <>
      <Container>
        <Color
          colorValue={theme.palette.dgdrDeepGreen}
          colorName="dgdr_deep_green"
        />
      </Container>
      {/* main color */}
      <Container>
        <Color colorValue={theme.palette.main.green} colorName="dgdr_green" />
        <Color
          colorValue={theme.palette.main.orangeRed}
          colorName="dgdr_orangered"
        />
        <Color colorValue={theme.palette.main.blue} colorName="dgdr_blue" />
        <Color colorValue={theme.palette.main.purple} colorName="dgdr_purple" />
        <Color colorValue={theme.palette.main.yellow} colorName="dgdr_yellow" />
      </Container>
      {/* sub Color */}
      <Container>
        <Color
          colorValue={theme.palette.sub.green}
          colorName="dgdr_sub_green"
        />
        <Color
          colorValue={theme.palette.sub.orangeRed}
          colorName="dgdr_sub_orangered"
        />
        <Color colorValue={theme.palette.sub.blue} colorName="dgdr_sub_blue" />
        <Color
          colorValue={theme.palette.sub.purple}
          colorName="dgdr_sub_purple"
        />
        <Color
          colorValue={theme.palette.sub.yellow}
          colorName="dgdr_sub_yellow"
        />
      </Container>
      {/* 무채색 계열 */}
      <Container>
        <Color colorValue={theme.palette.grey[100]} colorName="dgdr_100" />
        <Color colorValue={theme.palette.grey[200]} colorName="dgdr_200" />
        <Color colorValue={theme.palette.grey[300]} colorName="dgdr_300" />
        <Color colorValue={theme.palette.grey[400]} colorName="dgdr_400" />
        <Color colorValue={theme.palette.grey[500]} colorName="dgdr_500" />
        <Color colorValue={theme.palette.grey[600]} colorName="dgdr_600" />
        <Color colorValue={theme.palette.grey[700]} colorName="dgdr_700" />
        <Color colorValue={theme.palette.grey[800]} colorName="dgdr_800" />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  margin-bottom: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
`;

color.story = {
  name: 'color',
};
