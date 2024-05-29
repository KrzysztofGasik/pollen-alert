import classes from "./Tree.module.css";
import {
  Coniferous,
  Grass,
  Fungus,
  Dust,
  Animal,
} from "../../../../../api/Data";
import leafyImg from "../../../../../images/Leafy.png";
import coniferousImg from "../../../../../images/Coniferous.png";
import grassImg from "../../../../../images/Grass.png";
import fungusImg from "../../../../../images/Fungus.png";
import dustImg from "../../../../../images/Dust.png";
import animalImg from "../../../../../images/Animal.png";
import { motion } from "framer-motion";

const fadeInAnimationOptions = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.125 * index,
    },
  }),
};

export const Tree = ({
  name,
  index,
}: {
  id: number;
  name: string;
  index: number;
}) => {
  return (
    <motion.div
      className={classes.Tree}
      variants={fadeInAnimationOptions}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <span className={classes.TreeTitle}>{name}</span>
      <img className={classes.TreeImg} src={getImageForTree(name)} alt={name} />
    </motion.div>
  );
};

const getImageForTree = (name: string) => {
  if (Grass.includes(name)) {
    return grassImg;
  } else if (Coniferous.includes(name)) {
    return coniferousImg;
  } else if (Fungus.includes(name)) {
    return fungusImg;
  } else if (Dust.includes(name)) {
    return dustImg;
  } else if (Animal.includes(name)) {
    return animalImg;
  } else return leafyImg;
};
