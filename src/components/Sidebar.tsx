import SimpleLogo from "../assets/simple.svg";
import SidebarItem, { SidebarItemProps } from "../components/SidebarItem";
import { BiCalendarCheck, BiRocket, BiMenu, BiX } from "react-icons/bi";
import { SyntheticEvent } from "react";

type SidebarProps = {
  handleOpen: (e: SyntheticEvent) => void;
  open: boolean;
};

type MobileMenuProps = {
  handleOpen: (e: SyntheticEvent) => void;
  isOpen: boolean;
};

const SidebarItems: SidebarItemProps[] = [
  {
    title: "Day Planner",
    icon: BiCalendarCheck,
  },
  {
    title: "Priority",
    icon: BiRocket,
  },
];

function renderItems(item: SidebarItemProps, index: number) {
  return <SidebarItem title={item.title} icon={item.icon} key={index} />;
}

const MobileMenu = ({ handleOpen, isOpen }: MobileMenuProps) => {
  return (
    <div className="menu">
      <button className="button is-white" onClick={handleOpen}>
        {isOpen ? <BiX size="25px" /> : <BiMenu size="25px" />}
      </button>
    </div>
  );
};

const SidebarContent = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`sidebar ${!isOpen ? "hide" : ""}`}>
      <div className="logo-container">
        <figure className="image ">
          <img src={SimpleLogo} alt="logo" />
        </figure>
      </div>
      <div className="sidebar-content">{SidebarItems.map(renderItems)}</div>
    </div>
  );
};

function Sidebar({ open, handleOpen }: SidebarProps) {

  return (
    <>
      <MobileMenu handleOpen={handleOpen} isOpen={open} />

      <SidebarContent isOpen={open}></SidebarContent>
    </>
  );
}

export default Sidebar;
