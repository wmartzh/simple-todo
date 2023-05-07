import SimpleLogo from "../assets/simple.svg";
type SidebarProps = {
  children?: JSX.Element[] ;

}
function Sidebar({children}: SidebarProps) {
  return (
    <div className="sidebar card">
      <div className="logo-container">
        <figure className="image ">
          <img src={SimpleLogo} alt="logo" />
        </figure>
      </div>
      {children}
    </div>
  );
}

export default Sidebar