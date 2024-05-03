import classes from "./Home.module.css"

export const Home = () => {
  return (
    <>
      <h2 className={classes.Home}>
        Witaj w aplikacji Pollen Alert!
        <p>Tutaj dowiesz się co obecnie pyli</p>
      </h2>
    </>
  );
};
