import { IconType } from "react-icons";
import { VscBlank } from "react-icons/vsc";

export type SidebarItemProps = {
  title: string;
  icon?: IconType;
  onClick?: ()=> void
};

function SidebarItem({ title, icon, onClick }: SidebarItemProps  ) {
  return (
  
      <div onClick={onClick} className="sidebar-item ">
        <span className="icon-text ">
          <span className="icon">{icon ? icon({}) : <VscBlank />}</span>
          <span className="sidebar-text">{title}</span>
        </span>
      </div>
 
    
  );
}

export default SidebarItem;
