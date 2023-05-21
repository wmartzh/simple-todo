import { useState } from "react";
import { BiCircle } from "react-icons/bi";
import { ClickOutsideDetector } from "../hooks/click-outside-hook";
import { BlockPicker } from "react-color";
import { ColorResult } from "react-color";
import { TagType } from "../types/tasks";
export type TagProps = {
  item: TagType;
  handleUpdate: (index: string, name?: string, color?: string) => void;
};
function Tag({ item, handleUpdate }: TagProps) {
  const [editing, setEditing] = useState(false);
  const [picker, setPicker] = useState(false);

  const handleChangeColor = (color: ColorResult) => {
    handleUpdate(item.id, undefined, color.hex);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdate(item.id, event.target.value);
  };

  return (
    <div className="tag-container">
      <ClickOutsideDetector onClickOutside={() => setPicker(false)}>
        <span className="icon-text">
          <span className="icon" onClick={() => setPicker(!picker)}>
            <BiCircle color={item.color} />
          </span>
          {editing ? (
            <input
              className="tag-input"
              type="text"
              value={item.name}
              onChange={handleInputChange}
              onBlur={() => setEditing(false)}
              autoFocus
              style={{ color: item.color }}
            />
          ) : (
            <span
              className="tag-text"
              style={{ color: item.color }}
              onDoubleClick={() => setEditing(true)}
            >
              {item.name}
            </span>
          )}
        </span>
        {picker ? (
          <BlockPicker
            color={item.color}
            onChangeComplete={handleChangeColor}
            triangle="hide"
          ></BlockPicker>
        ) : (
          <span></span>
        )}
      </ClickOutsideDetector>
    </div>
  );
}

export default Tag;
