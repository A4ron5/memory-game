import {StartPage} from "./start";
import {GamePage} from "./game";
import {EndPage} from "./end";

export const routes = () => [
    {
        path: "/start",
        exact: true,
        component: StartPage,
    },
    {
        path: "/game",
        exact: true,
        component: GamePage,
    },
    {
        path: "/end",
        exact: true,
        component: EndPage
    }
]
