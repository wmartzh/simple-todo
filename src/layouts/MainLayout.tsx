import { SyntheticEvent, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const HEADERS:{[key:string]:string} = {
  "/":"Day Planner"
}

function getHeaderTitle(key: string):string{

  console.log('◉ ▶ file: MainLayout.tsx:12 ▶ getHeaderTitle ▶ key:', key);
  return HEADERS[key];
}
function MainLayout() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const handleOpen = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <>
      <div className="main-container">
        <Sidebar open={open} handleOpen={handleOpen}></Sidebar>
        <div className={`content ${!open ? "content-open" : "content-close"}`}>
          <Header title={getHeaderTitle(location.pathname)}/>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
