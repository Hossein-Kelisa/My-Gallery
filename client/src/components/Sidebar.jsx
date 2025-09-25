import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#photos">Photos</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
