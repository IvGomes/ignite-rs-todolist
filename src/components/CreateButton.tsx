import { PlusCircle } from 'phosphor-react';
import styles from './CreateButton.module.css';


export function CreateButton() {
    return (
        <button
            className={styles.box}
        >
            Criar <PlusCircle className={styles.icon} size={16} weight={"bold"} />
        </button>
    )
}