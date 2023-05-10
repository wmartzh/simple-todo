import { useState } from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import { BiCalendarCheck, BiRocket } from "react-icons/bi";
import SimpleLogo from "../assets/simple.svg";
import { v4 } from "uuid";
import Tag from "./Tag";
export type TagData = {
  id: string;
  color: string;
  name: string;
};

function renderItems(item: SidebarItemProps, index: number) {
  return <SidebarItem title={item.title} icon={item.icon} key={index} />;
}
function mapTagData(value: TagData, id: string, color?: string, name?: string) {
  const temp = value;
  if (id === value.id) {
    if (color) {
      temp.color = color;
    }
    if (name !== undefined) {
      temp.name = name;
    }
  }
  return temp;
}

const SidebarContent = ({ isOpen }: { isOpen: boolean }) => {
  const [tagData, setTagData] = useState<TagData[]>([
    {
      id: "1",
      name: "Work",
      color: "#000",
    },
  ]);

  const addTag = () => {
    setTagData([
      ...tagData,
      { id: v4(), name: "write a name ", color: "#000" },
    ]);
  };

  const handleUpdateTag = (id: string, name?: string, color?: string) => {
    setTagData(tagData.map((value) => mapTagData(value, id, color, name)));
  };

  return (
    <div className={`sidebar ${!isOpen ? "hide" : ""}`}>
      <div className="logo-container">
        <figure className="image ">
          <img src={SimpleLogo} alt="logo" />
        </figure>
      </div>
      <div className="sidebar-content">
        <SidebarItem title="Day Planner" icon={BiCalendarCheck} />
        <SidebarItem title="Priority" icon={BiRocket} />

        <br />

        <h3>Tags</h3>
        {tagData.map((tag, index) => (
          <Tag item={tag} handleUpdate={handleUpdateTag} key={index} />
        ))}
        <SidebarItem title="Add new" onClick={addTag} />
      </div>
    </div>
  );
};

export default SidebarContent;
