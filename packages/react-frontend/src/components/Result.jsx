import React from 'react'

export const Result = ((result) => {
    return (
        <div className="search-result">
        <Link
        to={`/post/${result.id}`}
        style={{
          borderBottom: "1px solid #E5E7EB",
        }}
        >
        {result.title}
        </Link>
        </div>
    );
})