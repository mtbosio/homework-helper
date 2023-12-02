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

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  const [userInfo, setUserInfo] = useState({
    name: undefined,
    credential: undefined,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QuestionCatalog userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        />
        <Route
          path="/new"
          element={
            <NewQuestion userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        />
        <Route
          path="/post/:id"
          element={
            <IndividualQuestion userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
