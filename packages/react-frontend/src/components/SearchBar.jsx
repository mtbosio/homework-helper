import React, { useState, useEffect } from 'react';
import "./SearchBar.css";
import { fetchQuestions } from "../apis";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetchQuestions()
        .then((res) => res.json())
        .then((json) => {
            const results = json.filter((question) => {
                return (
                value &&
                question &&
                question.title &&
                question.title.toLowerCase().includes(value)
                );
            });
            setResults(results);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return  
    <div className="input-wrapper">
        <input placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
    
}