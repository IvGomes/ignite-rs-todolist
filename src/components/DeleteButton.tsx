import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';


interface DeleteButtonProps {
    itemId: string;
    stateManagement: any[]
}

interface TasksStateManagement {
    id: string;
    task: string;
    resolved: boolean;
}

export function DeleteButton({ itemId, stateManagement }: DeleteButtonProps) {
    const [tasks, setTasks] = stateManagement;

    function handleDeleteTask() {
        const tasksWithItemDeleted = tasks
            .filter((t: TasksStateManagement) => t.id !== itemId && true)

        setTasks(tasksWithItemDeleted)
    }

    return (
        <div className={styles.box} onClick={handleDeleteTask}>
            <Trash className={styles.icon} />
        </div>
    )
}