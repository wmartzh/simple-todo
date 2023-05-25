import { useState } from "react";
import { BiCircle } from "react-icons/bi";
import { ClickOutsideDetector } from "../hooks/click-outside-hook";
import { BlockPicker } from "react-color";
import { ColorResult } from "react-color";
import { TagType } from "../types/tasks";

export type TagProps = {
  item: TagType;
  handleEdit: (index: string, name?: string, color?: string) => void;
  handleUpdate: (id: string, item: Partial<TagType>) => void;

};
function Tag({ item, handleUpdate, handleEdit }: TagProps) {
  const [editing, setEditing] = useState(false);
  const [picker, setPicker] = useState(false);

  const handleChangeColor = (color: ColorResult) => {
    handleEdit(item.id, undefined, color.hex)
    handleUpdate(item.id,{color:color.hex});
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleEdit(item.id, event.target.value);
  };
  const handleOnBlur = () => {
    const { id, ...rest } = item;
    setEditing(false);
    handleUpdate(id, rest);
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
              onBlur={handleOnBlur}
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
