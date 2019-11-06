import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ name }) {
  const [redirect, setRedirect] = useState(false);

  function renderRedirect() {
    if (redirect) {
      return <Redirect to="/" />
    }
  }

  return (
    <Container>
      {renderRedirect()}
      <h1 onClick={() => setRedirect(true)} >{name}</h1>
      <span>por: Bruno De Masi</span>
    </Container>
  );
}
