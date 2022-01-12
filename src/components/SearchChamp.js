import React, { useState } from "react";

import "../styles/SearchChamps.css";

function SearchChamp({ champs }) {
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [filterChamp, setFilterChamp] = useState([]);
  const [result, setResult] = useState("");
  const [inputvalue, setInputValue] = useState("");

  const handleFilter = (e) => {
    setToogleDropdown(false);
    const searchChamp = e.target.value;
    setInputValue(searchChamp);
    const newsearchChamp = champs.filter((champ) => {
      return champ.name.toLowerCase().includes(searchChamp.toLowerCase());
    });
    if (searchChamp === "") {
      setFilterChamp([]);
    } else {
      setFilterChamp(newsearchChamp);
    }
  };

  const onClickHandle = (e) => {
    setResult(e);
    setInputValue([]);
    setFilterChamp([]);
  };

  console.log(champs);
  return (
    <div className="search">
      <div className="search__champs">
        <input
          onClick={() => setToogleDropdown(!toogleDropdown)}
          value={inputvalue}
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
        />
        <div className="search__container">
          <div className="search__resultschamp__container">
            {filterChamp.length !== 0 && (
              <div className="search__resultsresultschamp">
                {filterChamp.map((champ, key) => (
                  <p key={key} onClick={() => onClickHandle(champ.name)}>
                    {champ.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchChamp;
