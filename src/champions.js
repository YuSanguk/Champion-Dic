const request = require("request");

const version = "11.19.1"; // Version of League of Legends

export const get_champion = () => {
  let Champion = [];
  request(
    "http://ddragon.leagueoflegends.com/cdn/" +
      version +
      "/data/ko_KR/champion.json",
    function (error, response, body) {
      let list = JSON.parse(body);
      let championList = list.data;
      for (let i in championList) {
        Champion.push([championList[i].id, championList[i].name]);
      }
    }
  );
  return Champion;
};
