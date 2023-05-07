import { IconType } from "react-icons";
import { VscBlank } from "react-icons/vsc";

export type SidebarItemProps = {
  title: string;
  icon?: IconType
};

function SidebarItem({ title,icon }: SidebarItemProps) {
  return (
    <div className="sidebar-item ">
      <span className="icon-text ">
        <span className="icon">
           {icon ? icon({}) : <VscBlank />}
        </span>
        <span>{title}</span>
      </span>
    </div>
  );
}

export default SidebarItem;
