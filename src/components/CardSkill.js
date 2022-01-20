import React, { useState } from "react";
import "../styles/CardSkill.css";
import { imageskillapi, imagepassiveapi } from "../axios/requests.js";

function CardSkill(props) {
  const [isactive, setIsActive] = useState("");
  const toogleisActive = (spell) => {
    setIsActive(spell);
  };

  const toogleDescription = () => {
    if (isactive === "") {
      return "descriptionactive";
    }
    if (isactive !== props.passive.name) {
      return "descriptionNotactive";
    }
    if (isactive === props.passive.name) {
      return "descriptionactive";
    }
  };

  return (
    <>
      <div className="skills">
        <div className="skills__container">
          <h2 className="skills__title">ABILITIES</h2>
          <div className="skills__wapper">
            <div className="spells__container">
              <div
                className="spells__spells__container"
                onClick={() => toogleisActive(props.passive.name)}
              >
                <div className="spells__image__container">
                  <button
                    className={`spells__image__button 
                    ${isactive === "" ? "active" : null}
                    ${props.passive.name === isactive ? "active" : null}
                        `}
                  >
                    <img
                      src={`${imagepassiveapi}/${props.passive.image.full}`}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              {props.spells.map((spell) => (
                <div
                  className="spells__spells__container"
                  key={spell.id}
                  onClick={() => toogleisActive(spell.id)}
                >
                  <div className="spells__image__container">
                    <button
                      className={`spells__image__button
                        ${spell.id === isactive ? " active" : null}
                      `}
                    >
                      <img
                        src={`${imageskillapi}/${spell.image.full}`}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="description__container">
              <div className="border__outside">
                <div className="border__mid">
                  <div className="border__inner">
                    <div
                      className={`spell__description__conntainer ${toogleDescription()}`}
                    >
                      <h5 className="spell__name">{props.passive.name}</h5>
                      <p className="spell__description">
                        {props.passive.description}
                      </p>
                    </div>
                    {/* SPELLS */}
                    {props.spells.map((spell) => (
                      <div
                        className={`spell__description__conntainer ${
                          spell.id === isactive
                            ? " descriptionactive"
                            : "descriptionNotactive"
                        }`}
                        key={spell.id}
                      >
                        <h5 className="spell__name">{spell.name}</h5>
                        <p className="spell__description">
                          {spell.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSkill;
