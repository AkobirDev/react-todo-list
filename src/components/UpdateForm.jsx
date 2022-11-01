import React from "react";

const UpdateForm = ({ updateTask, changeTask, updateTodo, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control form-control-lg"
            value={updateTask && updateTask.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success mr-20" onClick={updateTodo}>
            Update
          </button>
          <button className="btn btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
