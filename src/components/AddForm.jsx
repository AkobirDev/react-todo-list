import React, { useRef, useEffect } from "react";

const AddForm = ({ newTask, setNewTask, addTask }) => {
  const todoRef = useRef();
  useEffect(() => {
    todoRef.current.focus();
  });

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            ref={todoRef}
            type="text"
            className="form-control form-control-lg"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={() => addTask()}>
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddForm;
