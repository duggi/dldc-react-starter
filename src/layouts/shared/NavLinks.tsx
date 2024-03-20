import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default NavLinks;
