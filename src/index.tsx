import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Home } from "./routes/home";
import { Info } from "./routes/info";
import { RootLayout } from "./layout";
import { Details, Month } from "./routes/pollen";
import {
  INFO_ROUTE,
  MONTH_ID_ROUTE,
  MONTHS_ROUTE,
  POLLEN_ID_ROUTE,
  POLLEN_ROUTE,
  ROOT_ROUTE,
} from "./router";
import { getDetails, getMonthId, getMonths } from "./api";
import { Months } from "./routes/pollen/months/Months";
import { PollenLayout } from "./layout/PollenLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROOT_ROUTE} element={<RootLayout />}>
      <Route index={true} element={<Home />} />
      <Route path={INFO_ROUTE} element={<Info />} />
      <Route path={POLLEN_ROUTE} element={<PollenLayout />} />

      <Route
        path={`${POLLEN_ROUTE}/${MONTHS_ROUTE}`}
        element={<Months />}
        loader={async () => getMonths()}
        handle={{
          crumb: () => <Link to={`${MONTHS_ROUTE}`}></Link>,
        }}
      />
      <Route
        path={`${POLLEN_ROUTE}/${MONTHS_ROUTE}/${MONTH_ID_ROUTE}`}
        element={<Month />}
        loader={async ({ params }) => getMonthId(params.monthId)}
        handle={{
          crumb: () => <Link to={`${MONTHS_ROUTE}/${MONTH_ID_ROUTE}`}></Link>,
        }}
      />
      <Route
        path={`${POLLEN_ROUTE}/${MONTHS_ROUTE}/${MONTH_ID_ROUTE}/${POLLEN_ID_ROUTE}`}
        element={<Details />}
        loader={async ({ params }) => getDetails(params.pollenId)}
        handle={{
          crumb: () => (
            <Link to={`${MONTH_ID_ROUTE}/${POLLEN_ID_ROUTE}`}></Link>
          ),
        }}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
