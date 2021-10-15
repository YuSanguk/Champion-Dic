import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Li from "./Li";
import "./style.css";
import dataF from "./champion.json";

const App = () => {
  const [a, SetA] = useState(Object.entries(dataF.data));
  const [target, SetTarget] = useState("");
  const [data, SetData] = useState([]);

  const search = async () => {
    const box = document.querySelector(".input");
    SetTarget(box.value);

    let List = [];
    for (var i = 0; i < a.length; i++) {
      if (
        a[i][1].id.toUpperCase().includes(target.toUpperCase()) ||
        a[i][1].name.includes(target)
      ) {
        List.push([a[i][1].id, a[i][1].name]);
      }
    }
    SetData(List);
    console.log(target);
  };

  const empty = () => {
    SetData([]);
    const box = document.querySelector(".input");
    box.value = "";
    SetTarget(box.value);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LoL Dic</title>
      </Helmet>
      <div className="Container">
        <h1>롤 챔피언 사전</h1>
        <p>
          결과가 나오지 않거나 전체 목록이 나올 경우, 버튼을 1,2번 다시
          눌러주세요
        </p>
        <p>초성만 적는 것으론 검색이 되지않으니 유의해주세요</p>
        <div className="Input_Container">
          <input className="input" placeholder="챔피언 이름 입력" />
          <button onClick={search}>검색!</button>
        </div>
        <button onClick={empty}>비우기</button>
        <ul>
          {data.map(d => (
            <Li key={d[0]} ChampionObj={d}></Li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
