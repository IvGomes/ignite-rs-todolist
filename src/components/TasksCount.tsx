import styles from './TasksCount.module.css';


interface TasksCounterProps {
    status: "created" | "done";
    label: String;
}

export default function TasksCount({ label, status }: TasksCounterProps) {
    return (
        <span className={styles.container}>
            <span className={styles[status]}>
                <strong>
                    {label}
                </strong>
                <span className={styles.countDisplay}>
                    0
                </span>
            </span>
        </span>
    )
}