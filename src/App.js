import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "react-graph-vis";

const PRIMARY_COLOR = "#7641BF";

function App() {
  const graph = {
    nodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#353535",
    },
    nodes: {
      color: PRIMARY_COLOR,
    },
    height: "450px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
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
          <div className="col d-flex justify-content-center mt-3">
            <Graph
              graph={graph}
              options={options}
              events={events}
              getNetwork={(network) => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <button className="btn handle-btn finish mr-5">Novo Mapa</button>
          <button className="btn handle-btn start">Pintar casas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
