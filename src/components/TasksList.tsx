import { ReactNode, useState } from "react";

import { FileDotted } from "phosphor-react";
import styles from './TasksList.module.css';
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";


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
    theme: string;
    stateManagement: any[];
}

interface TasksStateManagement {
    id: string;
    task: string;
    resolved: boolean;
}

function NewTask({theme, taskId, isChecked, text, stateManagement }: NewTaskProps) {
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
        <div
            data-checkedState={checked}
            className={`
                ${styles[theme]}
                ${styles.newTaskContainer}
            `}
        >
            <span onClick={handleCheck}>
                <Checkbox isChecked={checked} />
            </span>
            <span className={`
                ${styles[theme]} 
                ${
                    checked 
                        ? styles.textWrapperChecked 
                        : styles.textWrapper
                }
            `}>
                <span className={styles.editableTextDefault} role="textbox" contentEditable={true}>
                    {text}
                </span>
            </span>
            <DeleteButton
                theme={theme}
                itemId={taskId}
                stateManagement={[tasks, setTasks]}
            />
        </div>
    )
}

export const Tasks = {
    Root,
    Item,
    NoTasks,
    NewTask
}