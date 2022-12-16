import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';


export function DeleteButton() {


    return (
        <div className={styles.box}>
            <Trash className={styles.icon}/>
        </div>
    )
}