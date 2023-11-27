import React from 'react';
import "./SearchResults.css"
import { Result } from "./Result";

export const SearchResults = (results) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <Result result={result} key={id}/>;
            })}
        </div>
    );
}