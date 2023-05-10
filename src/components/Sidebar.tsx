
import { SyntheticEvent } from "react";

import MenuButton from "./MenuButton";
import SidebarContent from "./SidebarContent";

type SidebarProps = {
  handleOpen: (e: SyntheticEvent) => void;
  open: boolean;
};


function Sidebar({ open, handleOpen }: SidebarProps) {
  return (
    <>
      <MenuButton handleOpen={handleOpen} isOpen={open} />

      <SidebarContent isOpen={open} />
    </>
  );
}

export default Sidebar;
