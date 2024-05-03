import { Link, Outlet } from "react-router-dom";
import { MONTHS_ROUTE } from "../router";

export const PollenLayout = () => {
  return (
    <div>
      <h2>Pollen layout</h2>
      <Link to={MONTHS_ROUTE}>GO TO MONTHS</Link>
      <Outlet />
    </div>
  );
};
