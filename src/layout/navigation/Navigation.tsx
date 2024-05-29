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
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

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
  return (
    <motion.nav
      className={classes.Nav}
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ delay: 0.5 }}
    >
      <RenderMenuElements items={menuElements} />
    </motion.nav>
  );
};

const RenderMenuElements: FC<{ items: MenuElements[] }> = ({ items }) => (
  <ul className={classes.Menu}>
    {items.map(({ path, name, icon }) => (
      <li key={path} className={classes.MenuItem}>
        <Tooltip
          className={classes.Tooltip}
          title={name}
          placement="top"
          slotProps={{
            tooltip: {
              sx: { fontSize: ".75rem" },
            },
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 30],
                  },
                },
              ],
            },
          }}
        >
          <NavLink to={path} className={classes.Anchor}>
            <i className={classes.Icon}>{icon}</i>
          </NavLink>
        </Tooltip>
      </li>
    ))}
  </ul>
);
