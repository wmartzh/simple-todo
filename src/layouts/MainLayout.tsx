import Sidebar from "../components/Sidebar";
import SidebarItem, { SidebarItemProps } from "../components/SidebarItem";
import { BiCalendarCheck, BiRocket } from "react-icons/bi";

type MainLayoutProps = {
  children: JSX.Element;
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


function renderItems(item: SidebarItemProps){
  return <SidebarItem title={item.title} icon={item.icon}/>;
}


function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="main-container">
        <Sidebar>
           {SidebarItems.map(renderItems)}
        </Sidebar>
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
