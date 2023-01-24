import { ReactNode, useState } from "react";
import uuid from 'react-uuid';

import { FileDotted, Trash } from "phosphor-react";
import styles from './TasksList.module.css';
import { Checkbox } from "./Checkbox";


interface RootProps {
    children: ReactNode;
}

function Root({ children }: RootProps) {
    return (
        <ul className={styles.container}>
            {children}
        </ul>
    )
}


interface ItemListProps {
    children: ReactNode;
}

function Item({ children }: ItemListProps) {
    return (
        <li key={uuid()}>
            {children}
        </li>
    )
}


function NoTasks() {
    return (
        <div className={styles.noTasksContainer}>
            <i className={styles.noTasksIcon}>
                <FileDotted size={56} />
            </i>
            <p className={styles.mainText}>
                Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.secondaryText}>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}


function NewTask() {
    const [checked, setChecked] = useState(false)

    function handleCheck() {
        setChecked(!checked)
    }


    return (
        <div className={styles.newTaskContainer}>
            <span onClick={handleCheck}>
                <Checkbox isChecked={checked} />
            </span>
            <span className={checked ? styles.textWrapperChecked : styles.textWrapper}>
                <p>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer
                </p>
            </span>
            <i className={styles.newTaskRemoveIcon}>
                <Trash size={14} />
            </i>
        </div>
    )
}

export const Tasks = {
    Root,
    Item,
    NoTasks,
    NewTask
}