import styled from 'styled-components';
import Icon, { iconTypes } from './Icon';

const nonColoredIcon = iconTypes.filter((icon) => !icon.includes('color'));
const coloredIcon = iconTypes.filter((icon) => icon.includes('color'));

export default {
  component: Icon,
  title: 'Icon/Icon',
};

export const icon = () => <Icon icon="close_small" />;
icon.story = {
  name: 'Default',
};

export const customSize = () => <Icon icon="close_small" size="4rem" />;

export const customColor = () => <Icon icon="close_small" color="red" />;

export const nonColored_Icon = () => {
  return (
    <IconListStyle>
      {nonColoredIcon.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          <p>{icon}</p>
        </li>
      ))}
    </IconListStyle>
  );
};

export const colored_Icon = () => {
  return (
    <IconListStyle>
      {coloredIcon.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          <p>{icon}</p>
        </li>
      ))}
    </IconListStyle>
  );
};

const IconListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    p {
      color: ${({ theme }) => theme.palette.grey[700]};
    }
    svg {
      margin-right: 1rem;
    }
  }
`;
