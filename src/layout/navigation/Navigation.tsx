import { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaQuestion,
  FaLeaf,
  FaBars,
  FaWindowClose,
} from "react-icons/fa";

import classes from "./Navigation.module.css";
import { INFO_ROUTE, POLLEN_ROUTE, ROOT_ROUTE } from "../../router";

interface MenuElements {
  path: string;
  name: string;
  icon: ReactNode;
}

const menuElements: MenuElements[] = [
  {
    path: ROOT_ROUTE,
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: INFO_ROUTE,
    name: "Info",
    icon: <FaQuestion />,
  },
  {
    path: POLLEN_ROUTE,
    name: "Pollen",
    icon: <FaLeaf />,
  },
];

export const Navigation: FC = () => {
  const [swap, setSwap] = useState<boolean>(false);
  const swapHandler = () => setSwap((prevState) => !prevState);
  const menuClass = swap ? classes.MenuHidden : classes.MenuVisible;
  return (
    <nav>
      {swap ? (
        <FaBars onClick={swapHandler} className={classes.MenuOpen} />
      ) : (
        <FaWindowClose onClick={swapHandler} className={classes.MenuClosed} />
      )}
      <RenderMenuElements cssClass={menuClass} items={menuElements} />
    </nav>
  );
};

const RenderMenuElements: FC<{ cssClass: string; items: MenuElements[] }> = ({
  cssClass,
  items,
}) => (
  <ul className={cssClass}>
    {items.map(({ path, name, icon }) => (
      <li key={path}>
        <NavLink to={path}>
          <p>{name}</p>
          <i className={classes.Icon}>{icon}</i>
        </NavLink>
      </li>
    ))}
  </ul>
);
