import React, { useState } from 'react';
import { Form, Select } from '@rocketseat/unform';

import { Container, Algorithm } from './styles';

import GraphImage from '../../assets/graph.png';

import getPath from '../../services/api';

const options = [
  { id: 'prim', title: 'Prim' },
  { id: 'kruskal', title: 'Kruskal' }
]

export default function Main() {
  const [error, setError] = useState(false);

  function handleSubmit(data) {
    const { algorithm } = data;

    try {
      const graph = getPath(algorithm);

      console.log(graph);

      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <Container>
      <h1>Desafio</h1>
      <p>Desenvolva um programa com interface amigável, que utilizando
        o algoritmo de Prim e Kruskal solucione o grafo do slide em anexo
        (mesmo da aula).
      </p>

      <img src={GraphImage} alt="Graph"/>
      <p>{error === '' ? 'Selecione um algoritmo' : ''}</p>
      <Form onSubmit={handleSubmit}>
        <Select
          name="algorithm"
          options={options}
          placeholder="Selecione um algoritmo"
        />

        <button>Fazer a busca</button>
      </Form>

      <Algorithm>

      </Algorithm>
    </Container>
  );
}
