import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, markDone, setUpdateTask, deleteTask }) => {
  return (
    <>
      {task && task.length ? "" : "No Tasks...."}
      {task &&
        task
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, ind) => {
            return (
              <div key={task.id}>
                <div className="taskBg col">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{ind + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>

                  {/* Icons */}

                  <div className="iconWrap">
                    <span
                      title="comp / not comp"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    </span>

                    {task.status ? null : (
                      <span
                        title="edited"
                        onClick={() =>
                          setUpdateTask({
                            id: task.id,
                            title: task.title,
                            status: task.status,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </span>
                    )}

                    <span onClick={() => deleteTask(task.id)} title="delete">
                      <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Todo;
