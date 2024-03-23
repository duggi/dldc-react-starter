import { Link } from "react-router-dom";
import NavLinks from "@/layouts/shared/NavLinks";

function Top() {
  return (
    <div className="top-rail bg-orange-50 p-4">
      <code className="text-sm text-red-400">
        [-- TOP --]
      </code>
      <NavLinks />
    </div>
  )
}

export default Top;
