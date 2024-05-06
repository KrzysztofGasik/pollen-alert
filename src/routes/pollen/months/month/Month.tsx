import { Link, Outlet, useLocation, useLoaderData } from "react-router-dom";
import classes from "./Month.module.css";
import { Tree } from "./details";
import { ITree } from "../../../../api";
import { Card, CardHeader, Grid } from "@mui/material";

interface MonthData {
  monthName: string;
  treeData: ITree[];
}

export const Month = () => {
  const { pathname } = useLocation();
  const data = useLoaderData();
  const { monthName, treeData } = data as MonthData;

  return (
    <Grid>
      <Card>
        <CardHeader className={classes.Title} title={monthName} />
        <div className={classes.MonthWrapper}>
          {treeData &&
            treeData.map(({ name, id }) => (
              <Link to={`${pathname}/${name.toLowerCase()}`} key={name}>
                <Tree name={name} id={id} />
              </Link>
            ))}
        </div>
      </Card>
      <Outlet />
    </Grid>
  );
};
