import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link to="/family">Family</Link>
            </div>
            <div>
                <Link to="/branches">Family Branches</Link>
            </div>
        </div>
    );
};
