import React, { useState } from "react";

export const TareasCreator = (props) => {
  const [newTaskName, setNuevaTarea] = useState("");

  const updateTarea = (e) => setNuevaTarea(e.target.value);

  const createTarea = () => {
    // console.log(newTaskName);
    props.callback(newTaskName);
    setNuevaTarea("");
  };

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={updateTarea}
        placeholder="Escribe una nueva tarea..."
      />
      <button className="btn btn-primary mt-1" onClick={createTarea}>
        Agregar Tarea
      </button>
    </div>
  );
};
