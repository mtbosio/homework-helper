import React, { useState } from "react";
import {useForm} from "react"

function NewQuestion() {
    const [question, setQuestion] = useState({
        subject: "",
        title: "",
        author: "",
        body: ""
    })

    const handleSubmit = (event) => {
        alert(`The question: ${question}`);
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <label>Here is a field <input type="text"/></label>
            <input type="submit"/>
        </form>
    </div>)
}

export default NewQuestion;