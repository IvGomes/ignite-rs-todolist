import uuid from 'react-uuid';

import { PlusCircle } from 'phosphor-react';
import styles from './CreateButton.module.css';


interface CreateButtonProps {
    stateManagement: any[];
}

export function CreateButton({ stateManagement }: CreateButtonProps) {
    const [setNewTask, task, setInputToResetState] = stateManagement;
    const isNoEmptyInput = (task.trim()).length !== 0;


    function handleNewTask() {
        if(isNoEmptyInput) {
            setNewTask((prevState: any) => (
                [
                    ...prevState,
                    {
                        id: uuid(),
                        task: task.trim(),
                        resolved: false
                    }
                ]
            ))
    
            setInputToResetState("")
        }

        setInputToResetState("")
    }


    return (
        <button
            className={styles.box}
            onClick={() => handleNewTask()}
        >
            Criar <PlusCircle className={styles.icon} size={16} weight={"bold"} />
        </button>
    )
}