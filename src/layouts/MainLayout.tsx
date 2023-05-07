import { SyntheticEvent, useState } from "react";
import Sidebar from "../components/Sidebar";

type MainLayoutProps = {
  children: JSX.Element;
};

function MainLayout({ children }: MainLayoutProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <>
      <div className="main-container">
        <Sidebar open={open} handleOpen={handleOpen}></Sidebar>
        <div className={!open ? "content-open" : "content"}>{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
