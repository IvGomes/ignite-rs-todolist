import { useState } from 'react';
import { Check } from 'phosphor-react';

import styles from './Checkbox.module.css';


interface CheckboxProps {
    isChecked: boolean;
}

export function Checkbox({isChecked}: CheckboxProps) {


    return (
        <div className={isChecked ? styles.checked : styles.roundedBox}>
            {
                isChecked ? <Check
                color="#FFFFFF"
                size={16}
                weight={'bold'}
            /> : null
            }
        </div>
    )
}