import { useState } from 'react';
import { Check } from 'phosphor-react';

import styles from './Checkbox.module.css';


export function Checkbox() {
    const [checked, setChecked] = useState(false)

    function handleCheck() {
        setChecked(!checked)
    }


    return (
        <div onClick={handleCheck} className={checked ? styles.checked : styles.roundedBox}>
            {
                checked ? <Check
                color="#FFFFFF"
                size={16}
                weight={'bold'}
            /> : null
            }
        </div>
    )
}