import { CheckCircle, Circle } from 'phosphor-react';

import styles from './Checkbox.module.css';


export function Checkbox() {


    return (
        <div className={styles.box}>
            {/* <Circle
                className={styles.notClicked}
                weight="fill"
                color="#4EA8DE"
                size={16}
            /> */}
            <CheckCircle
                className={styles.clicked}
                weight="fill"
                size={18}
            />
        </div>
    )
}