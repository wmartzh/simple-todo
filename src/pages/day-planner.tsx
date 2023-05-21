import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Task from "../components/Task";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "@mui/material";
import { addTask, editTask } from "../features/tasks-slice";
import { v4 } from "uuid";
import { TaskType } from "../types/tasks";

function DayPlanner() {
  const dispatch = useAppDispatch();
  const [date] = useState(dayjs());
  const tasks = useAppSelector((state) => state.tasks);

  const handleNewTask = () => {
    dispatch(
      addTask({
        id: v4(),
        name: "Write new",
        done: false,
      })
    );
  };
  const handleEditTask = (id: string, value: Omit<TaskType, "id">) => {
    dispatch(
      editTask({
        id,
        value,
      })
    );
  };
  return (
    <>
      <h6>{date.format("dddd MMMM D YYYY h:mm A	")}</h6>

      <div className="columns">
        <div className="column is-four-fifths">
          <h4>Todo</h4>
          {tasks.map((task, i) => (
            <Task value={task} editTaks={handleEditTask} key={i} />
          ))}
          <Button variant="text" onClick={handleNewTask}>
            Add Task
          </Button>
        </div>
        <div className="column">
          <h4>Priority</h4>
        </div>
      </div>
    </>
  );
}

export default DayPlanner;
