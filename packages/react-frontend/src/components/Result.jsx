import React from 'react'

export const Result = ((result) => {
    return (
        <div className="search-result" onClick={(e) => alert(`You selected ${result}!`)}>
        
        {result.title}
   
        </div>
    );
})