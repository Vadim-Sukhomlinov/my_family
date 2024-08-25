import { RouteObject, Navigate } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Family } from "./pages/Family/Family";
import { FamilyBranches } from "./pages/FamilyBranches/FamilyBranches";
import { Introduce } from "./pages/Introduce/Introduce";

export const routes = (isLogin: boolean): Array<RouteObject> => [
    {
        path: "/",
        element: isLogin ? <Main /> : <Navigate to={"/login"} />,
        children: [
            {
                path: "/family",
                element: <Family />,
            },
            {
                path: "/branches",
                element: <FamilyBranches />,
            },
            {
                index: true,
                element: <Introduce />,
            },
        ],
    },
];
