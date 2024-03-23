import { Link } from "react-router-dom";
import NavLinks from "@/layouts/shared/NavLinks";

function Bottom() {
  return (
    <div className="bottom-rail bg-purple-50 p-4">
      <code className="text-sm text-red-400">
        [-- BOTTOM --]
      </code>
      <NavLinks />
    </div>
  )
}

export default Bottom;
