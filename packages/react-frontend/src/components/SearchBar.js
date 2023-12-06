import React, { useState } from "react";
import "./SearchBar.css";
import { fetchQuestionsByTitle } from "../apis";

export const SearchBar = ({ setQuestions }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetchQuestionsByTitle(value)
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchData(e.target.value);
          }
        }}
      />
    </div>
  );
};
