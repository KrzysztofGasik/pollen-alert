import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Home}>
        Witaj w aplikacji Pollen Alert!
        <p>Tutaj dowiesz się co obecnie pyli</p>
      </h2>
      <iframe
        title="Pollen-Calendar"
        src={"http://www.alergen.info.pl/kalendarz_pylenia_roslin.php"}
        width={800}
        height={800}
        sandbox={"allow-scripts"}
      />
    </div>
  );
};
