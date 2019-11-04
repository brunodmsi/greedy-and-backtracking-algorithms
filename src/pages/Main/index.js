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
  const [graph, setGraph] = useState([]);

  function handleSubmit(data) {
    const { algorithm } = data;

    try {
      const graph = getPath(algorithm);

      graph.res.edges = Object.keys(graph.res.edges)
        .map(i => graph.res.edges[i])

      setGraph(graph);

      console.log(graph)
      
      setError(false);
    } catch (error) {
      console.log(error)
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

      <p className="error">{error === true ? 'Selecione um algoritmo antes de realizar a busca' : ''}</p>
      
      <Form onSubmit={handleSubmit}>
        <Select
          name="algorithm"
          options={options}
          placeholder="Selecione um algoritmo"
        />

        <button>Fazer a busca</button>
      </Form>

      <Algorithm>
        {graph.length === 0 ? ''
          : (
            <>
              <p>Resultado do algoritmo {graph.algorithm}</p>
              
              <table>
                <thead>
                  <tr>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Peso</th>
                  </tr>
                </thead>

                <tbody>
                  {graph.res.edges.map(edge => {
                    return (
                      <tr>
                        <td>
                          {edge.startVertex.value}
                        </td>
                        <td>
                          {edge.endVertex.value}
                        </td>
                        <td>
                          {edge.weight}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
          )}
      </Algorithm>
    </Container>
  );
}
