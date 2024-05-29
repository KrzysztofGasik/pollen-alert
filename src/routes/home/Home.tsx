import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Home}>Welcome to the Pollen Alert app!</h2>
      <h4>Here you will find out what is currently dusting</h4>
    </div>
  );
};
