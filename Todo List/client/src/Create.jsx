import React from "react";
import { useState } from "react";
import axios from "axios";
function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };
  return (
    <div className="containerCreate">
      <input placeholder="Enter your task..." class="input" name="text" type="text" onChange={(e) => setTask(e.target.value)}></input>
      <button className="c-button" type="button" onClick={handleAdd}>
        <span className="c-main">
          <span className="c-ico">
            <span className="c-blur"></span> <span class="ico-text">+</span>
          </span>
          Add
        </span>
      </button>
    </div>
  );
}

export default Create;
