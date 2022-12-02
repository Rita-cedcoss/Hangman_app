import React, { useRef, useState } from "react";

const Hangman = () => {
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const imgArr = [
    "https://t4.ftcdn.net/jpg/01/16/67/99/360_F_116679941_wPDZXXs58H5SKL15YDeC2xoRaenOjGvV.jpg",
    "img1.jpg",
    "img2.webp",
    "img3.webp",
    "img4.webp",
    "img5.webp",
    "img6.webp",
    "img8.webp",
    "img9.webp",
    "img10.webp",
  ];
  const word = "FOOTBALL";
  const [wordsArr, setWordsArr] = useState(["", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [arrlen, setArrlen] = useState([]);
  const [disable, setDisable] = useState("");
  const [wonMessage, setWonmessage] = useState("");
  var flag = false;
  const ref1 = useRef();
  const btnHandler = (e) => {
    let btnValue = e.target.innerHTML.toUpperCase();
    e.target.disabled = true;
    for (let i = 0; i < word.length; i++) {
      if (btnValue == word.charAt(i)) {
        let remove = word.slice(i, i + 1);
        arrlen.push(remove);
        wordsArr[i] = word.charAt(i);
        setWordsArr([...wordsArr]);
        setArrlen([...arrlen]);
        console.log(remove, arrlen, arrlen.length);
        flag = true;
      }
    }
    if (flag == false) {
      setCount(count + 1);
    } else {
      if (arrlen.length == 8) {
        setWonmessage("You won the match!");
        setDisable("divDisable");
      }
    }
    if (count == 8) {
      setDisable("divDisable");
      setWonmessage("You Lose the game");
      setCount(9);
      flag = true;
    }
  };

  return (
    <div id="outer">
      <div id="imgDisplay">
        <img alt="" height="500px" width="100%" src={imgArr[count]}></img>
      </div>
      <div id="resultShow">
        <h1>Hangman Game</h1>
        <div id="selResult">
          {wordsArr.map((item) => {
            return (
              <>
                <span>{item}</span>
              </>
            );
          })}
        </div>
        <div id="resultDeclare">
          <h1>Hint:OutDoor Game</h1>
          <h2>{wonMessage}</h2>
        </div>
        <div id="alphabetContainer">
          {arr.map((item) => {
            return (
              <button
                className={`grid ${disable}`}
                ref={ref1}
                onClick={btnHandler}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hangman;
