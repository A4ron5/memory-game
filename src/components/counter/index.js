import React from 'react';
import {useStore} from "effector-react";

import {$score} from "../../models/score";

import {StyledCounter} from "./ui";

export const Counter = ({secondary}) => {
    const counter = useStore($score);
    const score = `Score \n${counter}`

    return (
        <StyledCounter secondary={secondary}>
            {score}
        </StyledCounter>
    )
}
