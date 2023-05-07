import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { BiCircle } from "react-icons/bi";

export type TagProps = {
  title: string;
};
function Tag({ title }: TagProps) {
  const [tagText, setTagText] = useState(title);
  const [editing, setEditing] = useState(false);
  const [picker, setPicker] = useState(false);
  const [color, setColor] = useState("#000");

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(event.target.value);
  };
  return (
    <div className="tag-container">
      <span className="icon-text">
        <span className="icon" onClick={() => setPicker(!picker)}>
          <BiCircle color={color} />
        </span>
        {editing ? (
          <input
            className="tag-input"
            type="text"
            value={tagText}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
            style={{color}}
          />
        ) : (
          <span
            className="tag-text"
            style={{ color }}
            onDoubleClick={handleDoubleClick}
          >
            {title}
          </span>
        )}
      </span>
      {picker ? (
        <HexColorPicker
          color={color}
          onChange={handleChangeColor}
        ></HexColorPicker>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default Tag;
