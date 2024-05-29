import { FC } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IMonth } from "../../../api";

import classes from "./Months.module.css";

interface PollenData {
  index: number;
  monthName: string;
  monthNameForRoute: string;
  trees: string[];
}

export const Months: FC = () => {
  const data = useLoaderData() as PollenData[];
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Header}>
        To check what your allergy is in a given month, click the button 'Check'
      </h2>
      <span className={classes.Author}>
        Prepared by: Piotr Rapiejko, MD, based on the Center's measurements
        Environmental Allergen Research
      </span>
      <div className={classes.Months}>
        {data.map((singleMonth) => (
          <LinkToMonth month={singleMonth} key={singleMonth.index} />
        ))}
      </div>
    </div>
  );
};

const LinkToMonth: FC<{ month: IMonth }> = ({ month }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { monthName, monthNameForRoute } = month;
  return (
    <div className={classes.Square} key={monthName}>
      <span className={classes.SquareTitle}>{monthName}</span>
      <button
        className={classes.SquareButton}
        onClick={() => navigate(`${location.pathname}/${monthNameForRoute}`)}
      >
        Check
      </button>
    </div>
  );
};
