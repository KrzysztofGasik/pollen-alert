import { Link, useLocation } from "react-router-dom";

import classes from "./BreadCrumbs.module.css";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  let currentLink = "";

  let crumbs = pathname.split("/").filter((crumb: string) => crumb !== "");
  let fff = crumbs.map((crumb: string, index: number) => {
    currentLink += `/${crumb}`;
    const isLast = index === crumbs.length - 1 && crumbs.length > 1;
    return !isLast && crumbs.length > 1 ? (
      <Link key={crumb} to={currentLink} className={classes.Crumb}>
        Back to {crumb.toUpperCase()}
      </Link>
    ) : null;
  });

  return <div className={classes.Wrapper}>{fff}</div>;
};
