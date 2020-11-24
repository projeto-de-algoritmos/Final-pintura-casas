import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "react-graph-vis";

const BLUE_COLOR = "#03787C";
const ORANGE_COLOR = "#e68057";

function App() {
  const graph = {
    nodes: [
      { id: 1, label: "", title: "node 1 tootip text" },
      { id: 2, label: "", title: "node 2 tootip text" },
      { id: 3, label: "", title: "node 3 tootip text" },
      { id: 4, label: "", title: "node 4 tootip text" },
      { id: 5, label: "", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
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
            <span className="bold-text" style={{ color: "BLUE_COLOR" }}>
              Pintura de casas
            </span>
          </h1>
          <p>Historia</p>
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
          <button className="btn handle-btn start">Jogar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
