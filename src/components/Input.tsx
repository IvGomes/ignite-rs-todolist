import styles from './Input.module.css';


interface InputProps {
    stateManagement: any[];
}

export function Input({ stateManagement }: InputProps) {
    const [stateValue, setStateValue] = stateManagement;


    return (
        <input
            required
            id="inputTaskName"
            className={styles.inner}
            name="value"
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={stateValue}
            onChange={e => {
                setStateValue(e.target.value)
            }}
        />
    )
}