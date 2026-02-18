import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente.jsx";
import "./Styles/Styles.css";
import { ContadorApp } from "./ContadorApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente titulo="Esta seccion es de props xD" subtitulo={10} />
    <ContadorApp />
  </React.StrictMode>,
);
