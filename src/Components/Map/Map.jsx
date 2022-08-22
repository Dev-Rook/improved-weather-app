import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./Styles/Map.module.css";

import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className={styles.Map}>
        <div className={styles.Diffuser}></div>
        <img src={require("../../Assets/Images/Map.jpg")} alt="" className={styles.MapImage} />
    </div>
  )
}

export default Map