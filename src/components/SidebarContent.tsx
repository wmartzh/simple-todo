import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { BiCalendarCheck, BiRocket } from "react-icons/bi";
import SimpleLogo from "../assets/simple.svg";
import { v4 } from "uuid";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTag, editTag } from "../features/TagsSlice";
export type TagData = {
  id: string;
  color: string;
  name: string;
};


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
  const dispatch = useAppDispatch()
  const tags = useAppSelector((state)=> state.tags)

  const add = () => {
    dispatch(addTag({ id: v4(), name: "write a name ", color: "#000" }));
  };

  const handleUpdateTag = (id: string, name?: string, color?: string) => {
    dispatch(editTag({id, color, name}))
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
        {tags.map((tag, index) => (
          <Tag item={tag} handleUpdate={handleUpdateTag} key={index} />
        ))}
        <SidebarItem title="Add new" onClick={add} />
      </div>
    </div>
  );
};

export default SidebarContent;
