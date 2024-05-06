import { Link } from "react-router-dom";
import { Breadcrumbs as BreadcrumbsMui } from "@mui/material";

import classes from "./BreadCrumbs.module.css";
import { FC } from "react";

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
    <div className={classes.Wrapper}>
      <BreadcrumbsMui>{renderCrumbs}</BreadcrumbsMui>
    </div>
  );
};
