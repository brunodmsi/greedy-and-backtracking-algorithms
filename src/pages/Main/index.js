import React from 'react';

import Header from '../../components/Header';

import { Container, Algorithms, LinkStyled } from './styles';

const options = [
  { key: 0, path: '/backtracking', name: 'Backtracking' },
  { key: 1, path: '/prim-kruskal', name: 'Prim e Kruskal (Gulosos)' },
]

export default function Main() {
  return ( <>
    <Header name="Escolha seu algoritmo" />

    <Container>
      <h1>Algoritmos Greedy's e Backtracking</h1>
      <p>
        O objetivo desta aplicação é juntar trabalhos
        passados em aula e junta-los em um ambiente só.
      </p>

      <Algorithms>
        {options.map(option => (
          <LinkStyled
            key={option.key}
            to={option.path}
          >
            {option.name.toUpperCase()}
          </LinkStyled>
        ))}
      </Algorithms>
    </Container> </>
  );
}
