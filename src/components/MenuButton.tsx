import { SyntheticEvent } from "react";
import { BiMenu, BiX } from "react-icons/bi";
type MenuButtonProps = {
  handleOpen: (e: SyntheticEvent) => void;
  isOpen: boolean;
};
const MenuButton = ({ handleOpen, isOpen }: MenuButtonProps) => {
  return (
    <div className="menu">
      <button className="button is-white" onClick={handleOpen}>
        {isOpen ? <BiX size="25px" /> : <BiMenu size="25px" />}
      </button>
    </div>
  );
};

export default MenuButton;
