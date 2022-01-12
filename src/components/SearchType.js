import React from "react";
import "../styles/SearchType.css";

function SearchType() {
  const typesdata = [
    {
      id: 1,
      type: "TOUT",
    },
    {
      id: 2,
      type: "ASSASSIN",
    },
    {
      id: 3,
      type: "FIGHTER",
    },
    {
      id: 4,
      type: "MAGE",
    },
    {
      id: 5,
      type: "MARKSMEN",
    },
    {
      id: 6,
      type: "SUPPORT",
    },
    {
      id: 7,
      type: "TANK",
    },
  ];

  return (
    <>
      <div className="searchtype">
        <ul className="searchtype__container">
          {typesdata.map((type) => (
            <li key={type.id} className="searchtype__content">
              <button className="searchtype__button">{type.type}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchType;
