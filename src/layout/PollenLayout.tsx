import { Link, Outlet } from "react-router-dom";
import { MONTHS_ROUTE } from "../router";
import { Button } from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import classes from "./PollenLayout.module.css";

export const PollenLayout = () => {
  return (
    <>
      <Button
        size="large"
        endIcon={<GrassIcon />}
        variant="contained"
        style={{ backgroundColor: "#000" }}
      >
        <Link to={MONTHS_ROUTE} className={classes.Link}>
          Check what type of pollen is currently on
        </Link>
      </Button>
      <Outlet />
    </>
  );
};
