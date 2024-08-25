import React from "react";
import { useGetDataQuery } from "../../api/dataApi";
import styles from "./Introduce.module.css";
import { IData } from "../../shared/Interfaces";

export const Introduce: React.FC = () => {
    const { data: data = [] } = useGetDataQuery();
    const user = data.find((el: IData) => el.userName === "Vadim Sukhomlinov");

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Its me</h2>
            <div className={styles.userCard}>
                <img
                    src={user.image}
                    alt={user.userName}
                    className={styles.userImage}
                />
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{user.userName}</h3>
                    <p className={styles.roles}>
                        Roles: {user.role.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
};
