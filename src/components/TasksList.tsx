import { ReactNode, useState } from "react";

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
        <li>
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


interface NewTaskProps {
    taskId: string;
    isChecked: boolean;
    text: string;
    stateManagement: any[];
}

interface TasksStateManagement {
    id: string;
    task: string;
    resolved: boolean;
}

function NewTask({ taskId, isChecked, text, stateManagement }: NewTaskProps) {
    const [taskChange, setTaskChange, tasks, setTasks] = stateManagement;
    const [checked, setChecked] = useState(isChecked)

    function handleCheck() {
        const newTasksState = tasks
            .map((t: TasksStateManagement) => {
                if (t.id === taskId) {
                    const newT = {
                        ...t,
                        resolved: !checked
                    }

                    return newT
                }

                return t
            })

        setChecked(!checked)
        setTaskChange(!taskChange)
        setTasks(newTasksState);
    }


    return (
        <div data-checkedState={checked} className={styles.newTaskContainer}>
            <span onClick={handleCheck}>
                <Checkbox isChecked={checked} />
            </span>
            <span className={checked ? styles.textWrapperChecked : styles.textWrapper}>
                <p>
                    {text}
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