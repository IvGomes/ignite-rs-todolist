import TasksCount from './TasksCount';
import { Tasks } from './TasksList';

import styles from './TasksBoard.module.css';


export default function TasksBoard() {
    return (
        <section className={styles.box}>
            <div className={styles.status}>
                <TasksCount label={"Tarefas criadas"} status={'created'} />
                <TasksCount label={"Concluídas"} status={'done'} />
            </div>
            <div className={styles.board}>
                <Tasks.Root>
                    <Tasks.Item>
                        <Tasks.NewTask />
                    </Tasks.Item>
                </Tasks.Root>
            </div>
        </section>
    )
}