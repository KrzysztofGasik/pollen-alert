import { Link, Outlet } from "react-router-dom";
import { MONTHS_ROUTE } from "../router";

import classes from "./PollenLayout.module.css";

export const PollenLayout = () => {
  return (
    <div>
      <div className={classes.Message}>
        <Link to={MONTHS_ROUTE}>
          Click to check on which months what type of pollen is currently
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
