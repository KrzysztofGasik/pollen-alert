import { Link, useLocation, useLoaderData } from "react-router-dom";
import classes from "./Month.module.css";
import { Tree } from "./details";
import { ITree } from "../../../../api";
import { Card, CardHeader, Grid } from "@mui/material";
import { motion } from "framer-motion";

interface MonthData {
  monthName: string;
  treeData: ITree[];
}

export const Month = () => {
  const { pathname } = useLocation();
  const data = useLoaderData();
  const { monthName, treeData } = data as MonthData;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.5 }}
    >
      <Grid>
        <Card>
          <CardHeader className={classes.Title} title={monthName} />
          <div className={classes.MonthWrapper}>
            {treeData &&
              treeData.map(({ name, id }, index) => (
                <Link to={`${pathname}/${name.toLowerCase()}`} key={name}>
                  <Tree name={name} id={id} index={index} />
                </Link>
              ))}
          </div>
        </Card>
      </Grid>
    </motion.div>
  );
};
