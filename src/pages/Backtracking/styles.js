import styled from 'styled-components';
import { darken } from 'polished';

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

  img {
    max-width: 400px;
    align-self: center;
  }
`;
