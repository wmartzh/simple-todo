import SidebarItem from "./SidebarItem";
import { BiCalendarCheck, BiRocket } from "react-icons/bi";
import SimpleLogo from "../assets/simple.svg";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTag, editTag, updateTag, } from "../features/tags-slice";
import tagsService from "../services/tags.service";
import { TagType } from "../types/tasks";
import { LinearProgress } from "@mui/material";

const SidebarContent = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useAppDispatch();
  const tagsState = useAppSelector((state) => state.tags);

  const add = () => {
    tagsService.createTag({
      name: "write a name ",
      color: "#000",
    }).then((data: TagType & { tasksIds?: string[] }) => {
      delete data.tasksIds;
      dispatch(addTag(data));
    });
  };

  const handleEditTag = (id: string, name?: string, color?: string) => {
    dispatch(editTag({ id, value: { name, color } }));
    
  };
  const handleUpdateTag = (id: string, data: Partial<TagType>) => {
    console.log("Update", id);
    tagsService.updateTag(id, data).then((res) => console.log(res));
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
        {tagsState.isLoading ? (
          <LinearProgress />
        ) : (
          tagsState.tags.map((tag, index) => (
            <Tag
              item={tag}
              handleEdit={handleEditTag}
              handleUpdate={handleUpdateTag}
              key={index}
            />
          ))
        )}

        <SidebarItem title="Add new" onClick={add} />
      </div>
    </div>
  );
};

export default SidebarContent;
