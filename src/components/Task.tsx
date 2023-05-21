import { useState } from "react";
import { ClickOutsideDetector } from "../hooks/click-outside-hook";
import { Checkbox, Typography } from "@mui/material";
import { extractTags, extractTime, extractTitle } from "../utils/task-tools";

import { TaskType } from "../types/tasks";
import { useAppSelector } from "../store/hooks";
import TaskContent from "./TaskContent";

export type TaskProps = {
  value: TaskType;
  editTaks: (id: string, changes: Omit<TaskType, "id">) => void;
};

function Task({ value, editTaks }: TaskProps) {
  const tags = useAppSelector((state) => state.tags);
  const [editable, setEditable] = useState(false);
  undefined;
  const handleClickOutside = () => {
    setEditable(false);
  };
  const handleCheckboxChange = () => {
    const { id, done, ...rest } = value;

    editTaks(id, {
      done: !done,
      ...rest,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = extractTitle(event.target.value);
    const time = extractTime(event.target.value);
    const tagsValue = extractTags(event.target.value, tags);
    
    editTaks(value.id, {
      name: text ?? event.target.value,
      done: value.done,
      rawText: event.target.value,
      tags: tagsValue,
      time,
      date: new Date().toISOString(),
    });
  };

  return (
    <ClickOutsideDetector onClickOutside={handleClickOutside}>
      <div className="task-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Checkbox checked={value.done} onChange={handleCheckboxChange} />
          </div>
          <div className="text-container" onClick={() => setEditable(true)}>
            {!editable ? (
              <TaskContent  value={value} />
            ) : (
              <input
                className="task-input"
                type="text"
                value={value?.rawText || " "}
                onChange={handleChange}
                onBlur={() => setEditable(false)}
                autoFocus
              />
            )}
          </div>
        </div>
      </div>
    </ClickOutsideDetector>
  );
}

export default Task;
