import { createContext, useState } from 'react';
import { runChat } from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); /* TMP STORAGE */
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [prevResults, setPrevResults] = useState([]); /* TMP STORAGE */

  //Writing effect to delay the appearance of each word
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, index * 35);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    setInput("");
    let response = "";
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    let resArr = response.split("**");
    let newRes = "";
    for (let i = 0; i < resArr.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newRes += resArr[i];
      } else {
        newRes += `<b>${resArr[i]}</b>`;
      }
    }
    let newRes2 = newRes.split("*").join("<br>");
    setPrevResults((prev) => [...prev, newRes2]);
    let newResArr = newRes2.split(" ");
    for (let i = 0; i < newResArr.length; i++) {
      delayPara(i, newResArr[i] + " ");
    }
    setLoading(false);
  };

  const prevChat = (index) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    let newRes2 = prevResults[index];
    let newResArr = newRes2.split(" ");
    // for (let i = 0; i < newResArr.length; i++) {
    //   delayPara(i, newResArr[i] + " ");
    // }
    setResultData(newRes2); //No delay
    setLoading(false);
    setInput("");
  }

  const newChat = () => {
    setLoading(false);
    setShowResults(false);
  }

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResults,
    setShowResults,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    prevChat,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;