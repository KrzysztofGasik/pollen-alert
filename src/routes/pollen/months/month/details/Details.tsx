import { useLoaderData } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import Leszczyna from "../../../../../images/Leszczyna.jpg";
import Olcha from "../../../../../images/Olcha.jpg";
import Cis from "../../../../../images/Cis.jpg";
import Topola from "../../../../../images/Topola.jpg";
import Wierzba from "../../../../../images/Wierzba.png";
import Brzoza from "../../../../../images/Brzoza.jpg";
import Grab from "../../../../../images/Grab.jpg";
import Jesion from "../../../../../images/Jesion.jpg";
import Dab from "../../../../../images/Dab.jpg";
import Buk from "../../../../../images/Buk.jpg";
import Sosna from "../../../../../images/Sosna.jpg";
import Swierk from "../../../../../images/Swierk.jpg";
import BezCzarny from "../../../../../images/BezCzarny.jpg";
import Lipa from "../../../../../images/Lipa.jpg";
import Platan from "../../../../../images/Platan.jpg";
import Trawa from "../../../../../images/Trawa.jpg";
import Babka from "../../../../../images/Babka.jpg";
import Pokrzywa from "../../../../../images/Pokrzywa.jpg";
import Szczaw from "../../../../../images/Szczaw.jpg";
import Zyto from "../../../../../images/Zyto.jpg";
import BabkaLancetowata from "../../../../../images/BabkaLancetowata.jpg";
import Komosa from "../../../../../images/Komosa.jpg";
import BabkaSzerokolistna from "../../../../../images/BabkaSzerokolistna.jpg";
import Bylica from "../../../../../images/Bylica.jpg";
import Ambrozja from "../../../../../images/Ambrozja.jpg";
import Cladosporium from "../../../../../images/Cladosporium.jpg";
import Alternaria from "../../../../../images/Alternaria.jpg";
import Kurz from "../../../../../images/Kurz.jpg";
import Animal from "../../../../../images/Animal.jpg";
import { motion } from "framer-motion";

const imageArray = [
  Leszczyna,
  Olcha,
  Cis,
  Topola,
  Wierzba,
  Brzoza,
  Grab,
  Jesion,
  Dab,
  Buk,
  Sosna,
  Swierk,
  BezCzarny,
  Lipa,
  Platan,
  Trawa,
  Babka,
  Pokrzywa,
  Szczaw,
  Zyto,
  BabkaLancetowata,
  Komosa,
  BabkaSzerokolistna,
  Bylica,
  Ambrozja,
  Cladosporium,
  Alternaria,
  Kurz,
  Animal,
];

interface DetailsItem {
  name: string;
  info: string;
  image: string;
  imageFilename: string;
}

export const Details = () => {
  const details = useLoaderData() as DetailsItem[];
  const { name, info, imageFilename } = details[0];
  const pathToImage = mapThrougImages(imageFilename, imageArray);
  const path: string = pathToImage[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 250, width: 250, margin: "0.5rem auto" }}
          component="img"
          image={path}
        />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body2">{info}</Typography>
          <Typography variant="caption">Źródło: Wikipedia</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const mapThrougImages = (name: string, imageArray: string[]) =>
  imageArray.filter((image) => image.includes(name));
