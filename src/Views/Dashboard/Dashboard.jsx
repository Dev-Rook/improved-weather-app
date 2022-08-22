import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Styles/Dashboard.module.css";
import { GlobalContext } from "../../Context/GlobalContext";

import Input from "../../Components/Input/Input";
import Display from "../../Components/Display/Display";
import InfoBar from "../../Components/InfoBar/InfoBar";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState({});

  // 3681b5eb2ec63fa08c198f554c4f3fc2

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3681b5eb2ec63fa08c198f554c4f3fc2`;

  const getSearchData = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        console.log({ search });
        setSearchData(res.data);
        console.log(res.data)
      });
    }
    setSearch("")
  };

  return (
    <div className={styles.Dashboard}>
      <GlobalContext.Provider value={{setSearch, setSearchData, getSearchData, searchData}}>
        <Input />
        <Display />
        <InfoBar />
      </GlobalContext.Provider>
    </div>
  );
};

export default Dashboard;
