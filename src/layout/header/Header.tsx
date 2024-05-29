import { motion } from "framer-motion";
import "./Header.module.css";

export const Header = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <header>
        <h1>Pollen Alert</h1>
      </header>
    </motion.div>
  );
};
