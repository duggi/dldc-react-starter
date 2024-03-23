import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="p-2 border border-dashed border-sky-400">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default NavLinks;
