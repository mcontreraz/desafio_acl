import React, { useState } from "react";

export const TareasRow = (props) => {
  const [editMode, setEditMode] = useState(false);

  const [editedTask, setEditedTask] = useState("");

  const edit = () => {
    setEditMode(true);
    console.log("edit presionado");
  };

  const setEditTarea = (e) => setEditedTask(e.target.value);

  const editComplete = () => {
    setEditMode(false);
    return props.editTask(props.task.name, editedTask);
  };

  return (
    <tr key={props.task.name}>
      <td>
        {editMode ? (
          <input
            type="text"
            className="form-control"
            onChange={setEditTarea}
            value={editedTask}
            placeholder={props.task.name}
          />
        ) : (
          props.task.name
        )}
      </td>
      <td>
        <input
          type="button"
          className="btn btn-danger"
          onClick={() => props.deleteTask(props.task)}
          value="Eliminar"
        />
        {editMode ? (
          <input
            type="button"
            className="btn btn-success mx-2"
            onClick={() => editComplete()}
            value="Guardar"
          />
        ) : (
          <input
            type="button"
            className="btn btn-warning mx-2"
            onClick={() => edit()}
            value="Editar"
          />
        )}
      </td>
    </tr>
  );
};
