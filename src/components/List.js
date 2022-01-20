import React, { useState, useEffect } from "react";
import { riotapi } from "../axios/requests.js";
// import { imagechampapi } from "../axios/requests.js";
// import Champ from "../components/Champ.js";
import "../styles/List.css";
import axios from "axios";
import SearchChamp from "./SearchChamp.js";

function List() {
  const [showloading, setshowloading] = useState(false);
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    const getAllChamp = async () => {
      try {
        const res = await axios.get(`${riotapi}/champion.json`);
        getChampData(Object.values(res.data.data));
        console.log("Get all champs", res.data.data);
      } catch (err) {
        alert(err.message);
      }
    };
    getAllChamp();
  }, []);

  const getChampData = async (result) => {
    const champArr = [];

    const res = await fetch(
      result.map((champItems) => {
        return axios
          .get(`${riotapi}/champion/${champItems.id}.json`)
          .then((result) => {
            champArr.push(result.data.data[champItems.id]);
          });
      })
    );
    setChamps(champArr);
    console.log("Array Champs", champArr);
    setTimeout(() => {
      setshowloading(true);
    }, 2000);
  };

  // console.log(champs);

  return (
    <>
      <div className="list__search">
        {showloading && <SearchChamp champs={champs} />}
      </div>
    </>
  );
}

export default List;
