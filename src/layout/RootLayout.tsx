import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { Footer } from "./footer/Footer";
import { Breadcrumbs } from "./breadcrumbs/BreadCrumbs";

import classes from "./RootLayout.module.css";
import { motion } from "framer-motion";

export const RootLayout: FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Breadcrumbs pathname={pathname} />
      <Navigation />
      <motion.div
        className={classes.Wrapper}
        initial={{
          opacity: 0,
          x: 200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.8 }}
      >
        <main className={classes.MainWindow}>
          <Outlet />
        </main>
      </motion.div>
      <Footer />
    </>
  );
};
