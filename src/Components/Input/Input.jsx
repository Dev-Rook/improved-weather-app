import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./Styles/Input.module.css";

import { motion } from "framer-motion";

const InputVariants = {
  hidden: {
    opacity: 0,
    zIndex: -1,
  },

  visible: {
    opacity: 1,
    zIndex: 1,
    // boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",

    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const Input = () => {
  const { setSearch, getSearchData } = useContext(GlobalContext);

  return (
    <motion.div
      className={styles.Input}
      variants={InputVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.MoodBall}></div>
      <input
        required
        type="text"
        className={styles.SearchInput}
        placeholder="Enter City Name..."
        onKeyPress={getSearchData}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.SearchButton}>
        <p className={styles.ButtonText}>Search</p>
      </button>
    </motion.div>
  );
};

export default Input;
