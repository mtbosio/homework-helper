import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuestionCatalog from "./pages/QuestionCatalog";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NewQuestion from "./pages/NewQuestion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="784911340257-tuiheqn4eegk80kffik7ihsgv4ajlb90.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionCatalog />} />
          <Route path="/new" element={<NewQuestion />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
