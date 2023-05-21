import { TagType, TaskType } from "../types/tasks";

export type TaskContentProps  = {
  value: TaskType;
  onClick?: ()=>void
};
const TaskTag = ({ values }: { values?: TagType[] }) => {
  return (
    <div className="tags">
      {values ? (
        values.map((value) => (
          <span className="tag" style={{ backgroundColor: value.color }}>
            {value.name}
          </span>
        ))
      ) : (
        <span></span>
      )}
    </div>
  );
};

function TaskContent({ value, onClick }: TaskContentProps) {
  return (
    <div className="task-content" onClick={onClick}>
      <span>{value.name} </span>{" "}
      {value.time ? <span className="tag">{value.time}</span> : ""}{" "}
      <TaskTag values={value.tags} />
    </div>
  );
}

export default TaskContent;
