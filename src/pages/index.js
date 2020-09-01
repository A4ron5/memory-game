import {Start} from "./start";
import {Game} from "./game";

export const routes = () => [
    {
        path: "/start",
        exact: true,
        component: Start,
    },
    {
        path: "/game",
        exact: true,
        component: Game,
    }
]
