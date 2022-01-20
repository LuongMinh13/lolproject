import React from "react";
import "../styles/CardChamp.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ChampionsType } from "../axios/champtype.js";
import { imagesplash } from "../axios/requests.js";
import CardSkill from "./CardSkill";

function CardChamp() {
  const location = useLocation();
  const champ = location.state;
  const image = `${imagesplash}/${champ.id}_0.jpg`;
  console.log(champ);

  return (
    <>
      <Navbar />
      <div
        className="cardchamp__background"
        style={{
          backgroundImage: `url(${imagesplash}/${champ.id}_0.jpg)`,
        }}
      >
        <div className="buttonback__container">
          <Link to={`/`} className="buttonback">
            CHAMPION LIST
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15"
              className="buttonback__icon"
            >
              <path d="M12.8 8.4V4.8S13 1.1 7 0h-.1c-6 1.1-5.8 4.8-5.8 4.8v3.6c0 1.9-.8 2.5-.8 2.5C1.5 15.3 4.5 15 4.5 15c-1.6-2.1 0-5.8 0-5.8-2.3-.3-1.9-2.7-1.7-3.4 0 0 2.2-.1 3.3 1.6v4.2l.9.9.8-.8V7.5c1.2-1.8 3.3-1.7 3.3-1.6.2.7.6 3.1-1.7 3.3 0 0 1.6 3.8 0 5.8 0 0 3 .3 4.2-4.1.1 0-.8-.6-.8-2.5z"></path>
            </svg>
          </Link>
        </div>
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
                    <div className="cardchamp__type__description" key={tag}>
                      <img src={ChampionsType[tag]} alt="" />
                      <p>{tag}</p>
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
      <div className="skill__container">
        <CardSkill spells={champ.spells} passive={champ.passive} />
      </div>
    </>
  );
}

export default CardChamp;
