import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { Footer } from "./footer/Footer";
import { Breadcrumbs } from "./breadcrumbs/BreadCrumbs";

import classes from "./RootLayout.module.css";

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
