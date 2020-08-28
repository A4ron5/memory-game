import React from 'react';
import {useStore} from "effector-react";

import {$counter} from "./model";

export const Counter = () => {
    const counter = useStore($counter);

    return (
        <div>{counter}</div>
    )
}
