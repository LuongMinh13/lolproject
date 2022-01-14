import React, { useEffect, useState } from "react";

import "../styles/SearchChamps.css";
import { ImInfo } from "react-icons/im";
import { imagechampapi } from "../axios/requests.js";
import Champ from "./Champ";
import TypesChampion from "../champdata/type";
import CardChamp from "./CardChamp";

function SearchChamp({ champs }) {
  // Input filter
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [filterChamp, setFilterChamp] = useState([]);

  const handleFilter = (e) => {
    const searchChamp = e.target.value;
    const newsearchChamp = champs.filter((champ) => {
      return champ.name.toLowerCase().includes(searchChamp.toLowerCase());
    });
    if (searchChamp === "") {
      setFilterChamp(champs);
    } else {
      setFilterChamp(newsearchChamp);
    }
  };

  //Type filter
  const [isActive, setIsActive] = useState();
  const handleFilterType = (e) => {
    const searchType = e.target.value;
    const newsearchtype = champs.filter((champ) => {
      return champ.tags.includes(searchType);
    });
    if (searchType === "Tout") {
      setFilterChamp(champs);
    } else {
      setFilterChamp(newsearchtype);
    }
    setIsActive(searchType);
  };

  useEffect(() => {
    setFilterChamp(champs);
  }, [champs]);

  // const onClickHandle = (e) => {
  //   // const newsearchChamp = champs.filter((champ) => {
  //   //   return champ.name.toLowerCase().includes(searchChamp.toLowerCase());
  //   // });
  //   // setClickChamp(newsearchChamp);
  //   setToogleDropdown(!toogleDropdown);
  //   console.log(e);
  // };

  // CARD CHAMP
  const [tooglecardchamp, setToogleCardChamp] = useState(false);
  const handletooglecardchamp = (e) => {
    setToogleCardChamp(true);
    console.log(e.target.data);
  };

  return (
    <>
      <div className="search">
        {/* FILTER INPUT */}
        <div className="search__champs">
          <input
            onClick={() => setToogleDropdown(!toogleDropdown)}
            // value={clickchamp}
            type="text"
            placeholder="Search..."
            onChange={handleFilter}
          />
          <div className="search__container">
            <div className="search__resultschamp__container">
              {toogleDropdown ? (
                <div className="search__resultsresultschamp">
                  {filterChamp.map((champ, key) => (
                    <p key={key}>{champ.name}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* FILTER TYPE */}
        <div className="search__type">
          <ul className="searchtype__container">
            {TypesChampion.map((type) => (
              <li key={type.id} className="searchtype__content">
                <button
                  value={type.type}
                  className={
                    isActive === type.type
                      ? "searchtype__button active"
                      : "searchtype__button"
                  }
                  onClick={(e) => handleFilterType(e)}
                >
                  {type.type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* DISPLAY CHAMP */}
      <div className="show__champs">
        <div className="listchamps__content">
          <ul>
            {filterChamp.map((champ) => (
              <li key={champ.id}>
                <Champ
                  name={champ.name}
                  image={`${imagechampapi}/${champ.id}_0.jpg`}
                  tags={champ.tags}
                />
                <div className="preview__button">
                  <button data-array={champ} onClick={}>PREVIEW</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* {tooglecardchamp ? <CardChamp /> : null} */}
      </div>
    </>
  );
}

export default SearchChamp;
