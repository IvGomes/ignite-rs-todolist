import { useEffect, useState } from 'react';
import TasksCount from './TasksCount';
import { Tasks } from './TasksList';

import styles from './TasksBoard.module.css';


interface TasksBoardProps {
    theme: string;
    stateManagement: any[];
}

interface TasksStateManagement {
    id: string;
    task: string;
    resolved: boolean;
}

export default function TasksBoard({theme, stateManagement }: TasksBoardProps) {
    const [taskChange, setTaskChange] = useState(false)
    const [resolvedTasks, setResolvedTasks] = useState('0')

    // state geral das tasks
    const [tasks, setTasks, darkThemeIsActive] = stateManagement;

    const tasksCountNumber = tasks.length;
    const isTask = tasksCountNumber !== 0;


    useEffect(() => {
        const elements = document.querySelectorAll("[data-checkedState]");
        const howMuchTasksChecked = [...elements]
            .reduce((accumulator, element) => {
                const checkedTaskIsTrue = element
                    .getAttribute("data-checkedState") === "true";

                if (checkedTaskIsTrue) {
                    return accumulator + 1
                }

                return accumulator

            }, 0);

        setResolvedTasks(String(howMuchTasksChecked));
    }, [[], [taskChange]])

    return (
        <section className={styles.box}>
            <div className={styles.status}>
                <TasksCount
                    label={"Tarefas criadas"}
                    status={'created'}
                    counterTasks={[tasksCountNumber]}
                />
                <TasksCount
                    label={"Concluídas"}
                    status={'done'}
                    counterTasks={[tasksCountNumber, resolvedTasks]}
                />
            </div>
            <div className={styles.board}>
                <Tasks.Root>
                    {
                        isTask
                            ? (
                                tasks.map((taskState: TasksStateManagement) => {
                                    return (
                                        <Tasks.Item key={taskState.id}>
                                            <Tasks.NewTask
                                                taskId={taskState.id}
                                                isChecked={taskState.resolved}
                                                text={taskState.task}
                                                theme={theme}
                                                stateManagement={[
                                                    taskChange,
                                                    setTaskChange,
                                                    tasks,
                                                    setTasks,
                                                ]}
                                            />
                                        </Tasks.Item>
                                    )
                                })
                            )
                            : (
                                <Tasks.Item>
                                    <Tasks.NoTasks />
                                </Tasks.Item>
                            )
                    }
                </Tasks.Root>
            </div>
        </section >
    )
}