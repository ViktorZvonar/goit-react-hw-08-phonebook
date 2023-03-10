import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 5px 30px 5px 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px grey;
  background-color: #1976d2;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &.active {
    box-shadow: 0px 0px 20px 5px orange;
    border-radius: 5px;
    background-color: #fff;
    color: #1976d2;
  }
`;
