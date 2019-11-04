import Graph from '../algorithms/data-structures/Graph/Graph';
import GraphEdge from '../algorithms/data-structures/Graph/GraphEdge';
import GraphVertex from '../algorithms/data-structures/Graph/GraphVertex';

import Prim from '../algorithms/graph/prim';
import Kruskal from '../algorithms/graph/kruskal';

export default function (algorithm) {
  if (algorithm === "") throw Error()

  const graph = setGraph();

  const res = algorithm === 'prim'
    ? Prim(graph)
    : Kruskal(graph)

  return {
    algorithm: algorithm.replace(/^./, algorithm[0].toUpperCase()),
    res
  };
}

function setGraph() {
  const graph = new Graph();

  const a = new GraphVertex("1"),
        b = new GraphVertex("2"),
        c = new GraphVertex("3"),
        d = new GraphVertex("4"),
        e = new GraphVertex("5"),
        f = new GraphVertex("6"),
        g = new GraphVertex("7"),
        h = new GraphVertex("8"),
        i = new GraphVertex("9");

  graph.addVertex(a);
  graph.addVertex(b);
  graph.addVertex(c);
  graph.addVertex(d);
  graph.addVertex(e);
  graph.addVertex(f);
  graph.addVertex(g);
  graph.addVertex(h);
  graph.addVertex(i);

  graph.addEdge(new GraphEdge(a, b, 4));
  graph.addEdge(new GraphEdge(a, h, 8));
  graph.addEdge(new GraphEdge(b, c, 8));
  graph.addEdge(new GraphEdge(b, h, 11));
  graph.addEdge(new GraphEdge(c, d, 7));
  graph.addEdge(new GraphEdge(c, i, 2));
  graph.addEdge(new GraphEdge(c, f, 4));
  graph.addEdge(new GraphEdge(d, e, 9));
  graph.addEdge(new GraphEdge(d, f, 14));
  graph.addEdge(new GraphEdge(e, f, 10));
  graph.addEdge(new GraphEdge(f, g, 2));
  graph.addEdge(new GraphEdge(g, i, 6));
  graph.addEdge(new GraphEdge(g, h, 1));
  graph.addEdge(new GraphEdge(h, i, 7));

  return graph;
}


