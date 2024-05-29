import { Link } from "react-router-dom";
import { Breadcrumbs as BreadcrumbsMui } from "@mui/material";

import classes from "./BreadCrumbs.module.css";
import { FC } from "react";
import { motion } from "framer-motion";

export const Breadcrumbs: FC<{ pathname: string }> = ({ pathname }) => {
  let currentLink = "";
  let crumbs = pathname.split("/").filter((crumb: string) => crumb !== "");
  let renderCrumbs = crumbs.map((crumb: string, index: number) => {
    currentLink += `/${crumb}`;
    const isLast = index === crumbs.length - 1 && crumbs.length > 1;
    const crumbLabel = decodeURIComponent(crumb.toUpperCase());
    return crumbs.length > 1 ? (
      <Link
        to={currentLink}
        className={isLast ? classes.Active : classes.Crumb}
        key={crumb}
      >
        <p>{crumbLabel}</p>
      </Link>
    ) : null;
  });

  return (
    <motion.div
      className={classes.Wrapper}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.3 }}
    >
      <BreadcrumbsMui>{renderCrumbs}</BreadcrumbsMui>
    </motion.div>
  );
};
