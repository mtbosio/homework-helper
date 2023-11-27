import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuestionCatalog from "./pages/QuestionCatalog";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NewQuestion from "./pages/NewQuestion";
import IndividualQuestion from "./pages/IndividualQuestion";
import { useState } from "react";
import { login, logout } from "./apis"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  const [name, setName] = useState();

  const onLogin = (response) => {
    login(response.credential)
      .then((res) => res.json())
      .then((json) => {
        setName(json.name);
      })
      .catch((err) => console.log(err));
  };

  const onLogout = () => {
    logout()
      .then(setName(undefined))
      .catch((err) => console.log(err));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionCatalog onLogin={onLogin} onLogout={onLogout} name={name}/>} />
        <Route path="/new" element={<NewQuestion onLogin={onLogin} onLogout={onLogout} name={name}/>}/>
        <Route path="/post/:id" element={<IndividualQuestion onLogin={onLogin} onLogout={onLogout} name={name}/>} />
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <GoogleOAuthProvider clientId="784911340257-tuiheqn4eegk80kffik7ihsgv4ajlb90.apps.googleusercontent.com">
    <React.StrictMode>
      <Page/>
    </React.StrictMode>
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
