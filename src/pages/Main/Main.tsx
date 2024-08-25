import { Outlet } from "react-router-dom";
import { Navbar } from "./../NavBar/Navbar";
import styles from "./Main.module.css";

interface MainPageProps {
    children?: React.ReactNode;
}

export const Main: React.FC<MainPageProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                {children}
                <Outlet />
            </div>
        </div>
    );
};
