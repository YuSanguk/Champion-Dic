import axios from "axios";
import { useState } from "react";
const request = require("request");

const version = "11.19.1"; // Version of League of Legends

export const Get_champion = () => {
  let Champion = [];
  const [c, setC] = useState([]);
  try {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/" +
          version +
          "/data/ko_KR/champion.json"
      )
      .then(response => {
        setC(response.data);
      });
    for (let i in c) {
      Champion.push([c[i].id, c[i].name]);
    }
  } catch (e) {
    console.log(e);
  }

  return Champion;
};
