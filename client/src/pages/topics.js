import React from "react";
import ReactWordcloud from "react-wordcloud";
import { words } from "../component/word";
import NavBar from "../component/navbar";

export function Topics () {
    const callbacks = {
      getWordColor: (word) => (word.value > 15 ? "white" : "#1f2325"),
        onWordClick: (word) => (console.log(word.text)),
      //   onWordMouseOver: console.log,
      //   getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    };
const options = {
  rotations: 0,
  rotationAngles: [-90, 100],
  fontFamily: "courier new",
  fontSizes: [110, 120],
  
};
const size = [1600, 400];
    return (
      <div >
        <NavBar />
        <div className="topics">

        <ReactWordcloud
        
          callbacks={callbacks}
          options={options}
          size={size}
          words={words}
          />
          </div>
      </div>
    );
  }


export default Topics