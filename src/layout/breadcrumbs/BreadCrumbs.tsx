import { useLocation, Link } from "react-router-dom";
import { Breadcrumbs as BreadcrumbsMui } from "@mui/material";

import classes from "./BreadCrumbs.module.css";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
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
        <pre>{crumbLabel}</pre>
      </Link>
    ) : null;
  });

  return (
    <div className={classes.Wrapper}>
      <BreadcrumbsMui>{renderCrumbs}</BreadcrumbsMui>
    </div>
  );
};
