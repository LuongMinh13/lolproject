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
        // console.log("Get all champs", res.data.data);
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
    // console.log("Array Champs", champArr);
    setTimeout(() => {
      setshowloading(true);
    }, 2000);
  };

  // console.log(resultsearch);

  return (
    <>
      <div className="list__search">
        {showloading && <SearchChamp champs={champs} />}

        {/* <SearchType /> */}
      </div>
      {/* {!showloading && (
        <div className="listchamps">
          <div className="listchamps__container">
            <div className="listchamps__content">
              <ul className="listchamps__details">
                {champs.map((champ) => (
                  <li key={champ.id}>
                    <Champ
                      name={champ.name}
                      image={`${imagechampapi}/${champ.id}_0.jpg`}
                      tags={champ.tags}
                      description={champ.blurb}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default List;
