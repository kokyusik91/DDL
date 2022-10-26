import styled from 'styled-components';
import Icon, { iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'Icon/Icon',
};

export const icon = () => <Icon icon="air_pod" />;
icon.story = {
  name: 'Default',
};

console.log('iconTypes', iconTypes);

export const customSize = () => <Icon icon="air_pod" size="4rem" />;

export const customColor = () => <Icon icon="air_pod" color="red" />;

export const listOfIcons = () => {
  return (
    <IconListStyle>
      {iconTypes.map((icon) => (
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
