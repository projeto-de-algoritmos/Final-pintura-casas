import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "react-graph-vis";
import MyGraph from './algorithm/Graph';
import colorGraph from './algorithm/colorGraph';
import generateGraph from "./algorithm/generateGraph";
import formatGraph from "./algorithm/formatGraph";

const PRIMARY_COLOR = "#7641BF";

function App() {
  const [graph, setGraph] = useState(null);
  const [formatedGraph, setFormatedGraph] = useState(null);

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#353535",
    },
    height: "450px",
  };
  useEffect(() => {
    const graph = generateGraph();
    const formatedGraph = formatGraph(graph);

    setGraph(graph);
    setFormatedGraph(formatedGraph);
  }, [])

  function handleReset() {
    const graph = generateGraph();
    const formatedGraph = formatGraph(graph);

    setGraph(graph);
    setFormatedGraph(null);
    setTimeout(() => {
      setFormatedGraph(formatedGraph)
    })
  }

  function handleColor() {
    const coloredGraph = colorGraph(graph)
    console.log(coloredGraph)
    const formatedGraph = formatGraph(coloredGraph);
    setGraph(graph);
    setFormatedGraph(null);
    setTimeout(() => {
      setFormatedGraph(formatedGraph)
    }, 50)
  }

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-4 pt-4" style={{ color: "#353535" }}>
          <h1 className="mb-3">
            Projeto{" "}
            <span className="bold-text" style={{ color: PRIMARY_COLOR }}>
              Pintura de casas
            </span>
          </h1>
          <p>
            Luana era uma pintora experiente. Um dia, um velho matemático que
            possuia uma parte da cidade jougou um desafio a ela. Ele queria
            pintar todas as casas que possuia de tal forma que as casas das
            esquinas não tivesse a mesma cor com a que estava conectada. Por
            esse motivo, luana o contratou para dizer a ela quais cores as casas
            devem ser pintadas, pois ela não tem tempo a perder.
          </p>
        </div>
        <div className="row">
          <div className="graph-area">
            {
              formatedGraph ? (
                <Graph
                  graph={formatedGraph}
                  options={options}
                  getNetwork={(network) => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                  }}
                />
              ) : null
            }
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <button className="btn handle-btn finish mr-5" onClick={handleReset}>Novo Mapa</button>
          <button className="btn handle-btn start" onClick={handleColor}>Pintar casas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
