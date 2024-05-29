import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Home}>
        Welcome to the Pollen Alert app!
        <p>Here you will find out what is currently dusting</p>
      </h2>
      <div className={classes.FrameWrapper}>
        <iframe
          title="Pollen-Calendar"
          src={"http://www.alergen.info.pl/kalendarz_pylenia_roslin.php"}
          sandbox={"allow-scripts"}
          className={classes.Frame}
        />
      </div>
    </div>
  );
};
