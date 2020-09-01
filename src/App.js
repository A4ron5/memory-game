import React from "react";
import {BrowserRouter, Redirect} from "react-router-dom";

import {Routes} from "./routes";
import {GlobalStyles} from "./ui/global";

export const App = () => {
  return (
      <>
        <GlobalStyles/>
        <BrowserRouter>
            <Redirect to="/start"/>
            <Routes/>
        </BrowserRouter>
      </>
  );
};
