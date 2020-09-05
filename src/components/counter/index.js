import React from 'react';
import {useStore} from "effector-react";

import {$counter} from "./model";
import {StyledCounter} from "./ui";

export const Counter = ({secondary}) => {
    const counter = useStore($counter);
    const score = `Score \n${counter}`

    return (
        <StyledCounter secondary={secondary}>
            {score}
        </StyledCounter>
    )
}
