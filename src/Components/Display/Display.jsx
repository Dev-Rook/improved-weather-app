import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./Styles/Display.module.css";

import { motion } from "framer-motion";

const span1Variants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const span2Variants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const descriptionVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    rotate: -90,

    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const dataBoxVariants = {
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
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

const Display = () => {
  const { searchData } = useContext(GlobalContext);

  return (
    <motion.div className={styles.GeneralDataBox}
        variants={dataBoxVariants}
        initial="hidden"
        animate="visible"
    >
      <div className={styles.ConTempLatLon}>
        <motion.span
          variants={span1Variants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.Country}>{searchData.name}</motion.p>
          <p className={styles.Country}>{searchData?.sys?.country}</p>
        </motion.span>
        {searchData.main ? (
          <h1 className={styles.Temperature}>{searchData.main.temp}°c</h1>
        ) : null}
        <motion.div
          className={styles.LatLon}
          variants={span2Variants}
          initial="hidden"
          animate="visible"
        >
          {searchData.coord ? (
            <h1 className={styles.Lat}> - {searchData.coord.lat}</h1>
          ) : null}

          {searchData.coord ? (
            <h1 className={styles.Lon}> - {searchData.coord.lon}</h1>
          ) : null}
        </motion.div>
      </div>
      {/* {searchData.dt ? (
        <h1 className={styles.Description}>
          {searchData.dt}
        </h1>
      ) : null} */}
      {searchData.weather ? (
        <motion.h1
          className={styles.Description}
        //   variants={descriptionVariants}
        //   initial="hidden"
        //   animate="visible"
        >
          {searchData.weather[0].description}
        </motion.h1>
      ) : null}
    </motion.div>
  );
};

export default Display;
