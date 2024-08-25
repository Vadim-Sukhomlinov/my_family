import { Person } from "./Person/Person";
import styles from "./Family.module.css";

export const Family: React.FC = () => {
    return (
        <div className={styles.gridContainer}>
            <Person user="Natalia Sukhomlinova" />
            <Person user="Vladimir Sukhomlinov" />
            <Person user="Natalia Kramar" />
            <Person user="Vadim Sukhomlinov" />
            <Person user="Ekaterina Sukhomlinova" />
            <Person user="Emilia Sukhomlinova" />
        </div>
    );
};
