import SidebarItem from "./SidebarItem";
import { BiCalendarCheck, BiRocket } from "react-icons/bi";
import SimpleLogo from "../assets/simple.svg";
import { v4 } from "uuid";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTag, editTag, replaceTags } from "../features/tags-slice";
import { createTag, getAllTags } from "../services/tags.service";
import { useEffect } from "react";
import { TagType } from "../types/tasks";

const SidebarContent = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.tags);


  useEffect(() => {
    if (!tags.length) {
      getAllTags().then((data) => {
        dispatch(replaceTags(data));
      });
    }
  }, [dispatch, ]);

  const add = () => {
    createTag({
      name: "write a name ",
      color: "#000",
    }).then((data: TagType) => {
      dispatch(addTag(data));
    });
  };

  const handleUpdateTag = (id: string, name?: string, color?: string) => {
    dispatch(editTag({ id, value: { name, color } }));
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
