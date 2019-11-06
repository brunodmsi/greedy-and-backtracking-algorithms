import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

import GraphImage from '../../assets/graph.png';

import api from '../../services/api';

export default function Backtracking() {
  return ( <>
    <Header name="Algoritmo de Backtracking" />

    <Container>
      <h1>Desafio</h1>
      <p>
        Implemente o algoritmo de Backtracking para
        listar todas as possíveis soluções para o grafo
        abaixo.
      </p>

      <img src={GraphImage} alt="Graph"/>
    </Container> </>
  );
}
