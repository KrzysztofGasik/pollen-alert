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

export const Tree = ({ name }: { id: number; name: string }) => {
  return (
    <div className={classes.Tree}>
      <span className={classes.TreeTitle}>{name}xxx</span>
      <img className={classes.TreeImg} src={getImageForTree(name)} alt={name} />
    </div>
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
