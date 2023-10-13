import React from "react";
import ReactDOMClient from "react-dom/client";
import { Bg } from "./screens/Bg";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Bg />);
