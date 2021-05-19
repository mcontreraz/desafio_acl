import React from "react";
import "../index.css";

export const Banner = (props) => (
  <div className="row bg-success text-white banner px-3">
    <div className="col-6">
      <h3>Desafío Front-End</h3>
    </div>
    <div className="col-6">
      <p>Tareas pendientes: {props.taskItems.filter((t) => !t.done).length}</p>
    </div>
  </div>
);
