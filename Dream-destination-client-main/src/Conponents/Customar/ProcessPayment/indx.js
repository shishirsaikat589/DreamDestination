import React from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Payment from "./Payment";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Payment></Payment>
  </StrictMode>,
  rootElement
);