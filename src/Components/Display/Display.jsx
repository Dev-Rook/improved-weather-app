import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./Styles/Display.module.css";

import { motion } from "framer-motion";

const Display = () => {
  const { searchData } = useContext(GlobalContext);

  return (
    <div className={styles.GeneralDataBox}>
      <div className={styles.ConTempLatLon}>
        <span>
          <p className={styles.Country}>{searchData.name}</p>
          <p className={styles.Country}>{searchData?.sys?.country}</p>
        </span>
        {searchData.main ? (
          <h1 className={styles.Temperature}>{searchData.main.temp}</h1>
        ) : null}
        <span className={styles.LatLon}>
          {searchData.coord ? (
            <h1 className={styles.Lat}> - {searchData.coord.lat}</h1>
          ) : null}

          {searchData.coord ? (
            <h1 className={styles.Lon}> - {searchData.coord.lon}</h1>
          ) : null}
        </span>
      </div>
      {searchData.weather ? (
        <h1 className={styles.Description}>
          {searchData.weather[0].description}
        </h1>
      ) : null}
    </div>
  );
};

export default Display;
