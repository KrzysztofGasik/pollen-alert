import { useState, FC } from "react";
import stepsArray, { Step } from "./Steps";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classes from "./Info.module.css";
import { motion } from "framer-motion";

export const Info: FC = () => {
  const [step, updateStep] = useState(0);
  return (
    <div className={classes.Container}>
      <FaArrowLeft
        className={classes.ArrowLeft}
        onClick={() => updateStep(step > 0 ? step - 1 : stepsArray.length - 1)}
      />
      <div className={classes.Wrapper}>
        <div className={classes.Slider}>
          {stepsArray
            .filter((s) => s.index === step)
            .map((item) => (
              <SingleStep step={item} key={item.text} />
            ))}
        </div>
      </div>
      <FaArrowRight
        className={classes.ArrowRight}
        onClick={() => updateStep(step < stepsArray.length - 1 ? step + 1 : 0)}
      />
    </div>
  );
};

const SingleStep: FC<{ step: Step }> = ({ step }) => {
  const { index, text, space } = step;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <p className={classes.SlideTitle}>Slajd {index + 1}</p>
      <p className={classes.SlideText}>{text}</p>
      <p className={classes.SlideBreak}>{space}</p>
      <blockquote>
        <a
          href="http://www.medonet.pl/magazyny/abc-alergii,alergia---objawy--rodzaje-i-leczenie-alergii--uczulenie-na-pylki,artykul,1587489.html"
          target="_blank"
          rel="noreferrer"
          className={classes.SlideAnchor}
        >
          Źródło www.medonet.pl
        </a>
      </blockquote>
    </motion.div>
  );
};
