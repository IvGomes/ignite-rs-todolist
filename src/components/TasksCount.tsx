/*
A melhor forma de rastrear o que foi marcado e colocar o contados das tarefas feitas, é armazenar
o id dos itens marcados em um estado que pode ser compartilhado com o TaskCount...

Monitorar ele com useEffect e fazer um toggle pra tirar da lista caso já se encontre nela...

Desta forma, futuramente a gente pode pegar essa lista e separar no board as tarefas finalizadas e faltantes.

Além de não precisar de nada mais.
*/
import styles from './TasksCount.module.css';


interface TasksCounterProps {
    status: "created" | "done";
    label: String;
    counterTasks: number[];
}

export default function TasksCount({ label, status, counterTasks }: TasksCounterProps) {
    const [tasks, resolvedTasks] = counterTasks;
    const isDoneStatus = status === "done";
    const hasTasks = tasks !== 0;


    return (
        <span className={styles.container}>
            <span className={styles[status]}>
                <strong>
                    {label}
                </strong>
                <span className={styles.countDisplay}>
                    {
                        isDoneStatus
                            ? hasTasks
                                ? `${resolvedTasks} de ${tasks}`
                                : tasks
                            : tasks
                    }
                </span>
            </span>
        </span>
    )
}