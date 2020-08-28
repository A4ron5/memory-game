import React from "react";

import {CardList} from "../../features/card-list";
import {Counter} from "../../features/counter";
import {RestartButton} from "../../features/restart-button";

export const Home = () => {

  return (
    <main>
        <RestartButton/>
        <Counter/>
        <CardList/>
    </main>
  );
};
