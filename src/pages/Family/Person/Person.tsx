import React from "react";
import styles from "./Person.module.css";
import { IData } from "./../../../shared/Interfaces";
import { useGetDataQuery } from "../../../api/dataApi";

interface IPerson {
    user: string;
}

export const Person: React.FC<IPerson> = ({ user }) => {
    const { data: data = [] } = useGetDataQuery();
    const person = data.find((el: IData) => el.userName === `${user}`);

    if (!person) {
        return <div>User not found</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{person.userName}</h2>
            <div className={styles.userCard}>
                <img
                    src={person.image}
                    alt={person.userName}
                    className={styles.userImage}
                />
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{person.userName}</h3>
                    <p className={styles.roles}>
                        Roles: {person.role.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
};
