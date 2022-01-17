import React from "react";
import "../styles/CardChamp.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ChampionsType } from "../axios/champtype.js";
import {
  imagesplash,
  imagechampapi,
  imageskillapi,
  imagepassiveapi,
} from "../axios/requests.js";


function CardChamp() {
  const location = useLocation();
  const champ = location.state;
  const image = `${imagesplash}/${champ.id}_0.jpg`;
  console.log(champ);

  return (
    <>
      <div
        className="cardchamp__background"
        style={{
          backgroundImage: `url(${imagesplash}/${champ.id}_0.jpg)`,
        }}
      >
        <div className="cardchamp__gradient">
          <div className="cardchamp__container">
            <div className="cardchamp__image__container">
              <img className="cardchamp__image" src={image} alt="" />
            </div>
            <div className="cardchamp__description__container">
              <h3 className="cardchamp__2name">{champ.title}</h3>
              <h1 className="cardchamp__1name">{champ.name}</h1>
              <div className="cardchamp__description">
                <div className="cardchamp__type">
                  {champ.tags.map((tag) => (
                    <div className="cardchamp__type__description">
                      <img src={ChampionsType[tag]} key={tag} alt="" />
                      <p key={tag}>{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="cardchamp__history">
                  <p>{champ.blurb}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardChamp;
