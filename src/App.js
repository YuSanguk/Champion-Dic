import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Get_champion } from "./champions";
import Li from "./Li";
import "./style.css";

const App = () => {
  const [a, SetA] = useState([]);
  if (a === []) SetA(Get_champion);
  const [target, SetTarget] = useState("");
  const [data, SetData] = useState([]);

  const search = () => {
    const box = document.querySelector(".input");
    SetTarget(box.value);

    let List = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i][0].includes(target) || a[i][1].includes(target)) {
        List.push([a[i][0], a[i][1]]);
      }
    }
    SetData(List);
  };

  const empty = () => {
    SetData([]);
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
          결과가 바뀌지 않거나 모든 챔피언이 목록에 나올 경우, 버튼을 1,2번 다시
          눌러주세요
        </p>
        <p>
          영어로 검색할시, 대소문자 유의해주세요 (대소문자 자동 구분 없어요))
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
