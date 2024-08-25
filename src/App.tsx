import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const App: React.FC = () => {
    const isLogin = true;

    return useRoutes(routes(isLogin));
};
