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

  form {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    select {
      padding: 5px 8px;
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: none;
      background: transparent;
      background-image: none;
      -webkit-appearance: none;
      cursor: pointer;

      text-align: center;
      text-align-last: center;

      color: rgba(0, 0, 0);

      :focus {
        outline: none;
      }

      option {
        text-align: left;
      }
    }

    button {
      margin-top: 10px;
      padding: 10px;
      border-radius: 4px;
      border: 0;
      background-color: #7f8c8d;
      color: #fff;

      transition: 0.2s background;

      :hover {
        background-color: ${darken(0.05, "#7f8c8d")}
      }
    }
  }
`;

export const Algorithm = styled.div`

`;
