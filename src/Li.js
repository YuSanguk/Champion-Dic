import React from "react";

const Li = ({ ChampionObj }) => {
  if (ChampionObj[0] === "Fiddlesticks") ChampionObj[0] = "FiddleSticks";
  const link =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/" +
    ChampionObj[0] +
    "_0.jpg";
  return (
    <li>
      <img alt="champImg" src={link} width="50px" height="50px"></img>
      <p>{ChampionObj[0]}</p>
      <p>{ChampionObj[1]}</p>
    </li>
  );
};

export default Li;
