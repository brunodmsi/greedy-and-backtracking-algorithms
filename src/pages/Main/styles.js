import styled from 'styled-components';
import { darken } from 'polished';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;

  border-radius: 5px;
  margin-top: 50px;
  padding: 20px;

  h1, p {
    margin-left: 20px;
  }

  p {
    margin-right: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;

  background-color: #2C3A47;

  padding: 10px 20px;
  margin-top: 5px;
  width: 100%;

  border: 0;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  align-self: center;

  transition: 0.2s background;

  :hover {
    background-color: ${darken(0.05, "#2C3A47")}
  }
`;

export const Algorithms = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  a {
    text-align: center;
  }
`;
