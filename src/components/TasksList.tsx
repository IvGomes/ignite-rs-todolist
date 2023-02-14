import { ReactNode, useState } from "react";

import { FileDotted } from "phosphor-react";
import styles from './TasksList.module.css';
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";


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

function NewTask({ theme, taskId, isChecked, text, stateManagement }: NewTaskProps) {
    const [taskChange, setTaskChange, tasks, setTasks] = stateManagement;
    const [checked, setChecked] = useState(isChecked);
    const [editTask, setEditTask] = useState(false);


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

    function handleEditTask() {
        setEditTask(!editTask)
    }

    function handleConfirmEditTask() {
        const editedTask = [...tasks]
            .map((t: TasksStateManagement) => {
                if (t.id !== taskId) {
                    return t;
                }

                if (t.id === taskId) {
                    const getEditedTask = document.getElementById(taskId)?.innerText;

                    const edited = {
                        ...t,
                        task: getEditedTask
                    }

                    return edited;
                }
            })

        setTasks(editedTask);
        setEditTask(false)
    }

    function handleCancelEditTask() {
        setEditTask(false)
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
                {!editTask && <Checkbox isChecked={checked} />}
            </span>
            <span className={`
                ${styles[theme]} 
                ${checked
                    ? styles.textWrapperChecked
                    : styles.textWrapper
                }
            `}>
                <span
                    id={taskId}
                    className={styles.editableTextDefault}
                    role="textbox"
                    contentEditable={editTask}
                >
                    {text}
                </span>
            </span>

            <EditButton
                theme={theme}
                stateManagement={[editTask, setEditTask]}
                onClickEdit={handleEditTask}
                onClickConfirm={handleConfirmEditTask}
                onClickCancel={handleCancelEditTask}
            />
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