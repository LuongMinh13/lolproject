import React from "react";
import { ChampionsType } from "../axios/champtype.js";
import "../styles/Champ.css";

function Champ({ name, image, tags }) {

  return (
    <>
      <div
        className="champs"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="image__container"></div>
        <div className="champs__name">
          <h3>{name}</h3>
          <div className="champs__type__container">
            {tags.map((tag) => (
              <div key={tag} className="champs__type">
                <img
                  src={ChampionsType[tag]}
                  alt=""
                  title={tag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Champ;
