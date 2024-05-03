import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { Footer } from "./footer/Footer";

import classes from "./Layout.module.css";
import { Breadcrumbs } from "./breadcrumbs/BreadCrumbs";

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <div className={classes.Wrapper}>
        <Navigation />
        <main className={classes.MainWindow}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
