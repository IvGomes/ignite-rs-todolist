import { Check, PencilLine, X } from 'phosphor-react';
import styles from './EditButton.module.css';


interface EditButtonProps {
    theme: string;
    onClickEdit: () => void;
    onClickConfirm: () => void;
    onClickCancel: () => void;
    stateManagement: any[];
}

export function EditButton({
    theme,
    onClickEdit,
    onClickConfirm,
    onClickCancel,
    stateManagement
}: EditButtonProps) {
    const [isEditTask, setIsEditTask] = stateManagement;


    return (
        <div>
            {
                !isEditTask
                    ? <div
                        className={`${styles[theme]} ${styles.box}`}
                        onClick={onClickEdit}
                    >
                        <PencilLine
                            weight='bold'
                            className={styles.icon}
                        />
                    </div>
                    : <div className={styles.editControlContainer}>
                        <div
                            className={`${styles.box} ${styles.boxCancel}`}
                            onClick={onClickCancel}
                        >
                            <X
                                weight='bold'
                                className={styles.icon}
                            />
                        </div>
                        <div
                            className={`${styles.box} ${styles.boxConfirm}`}
                            onClick={onClickConfirm}
                        >
                            <Check
                                weight='bold'
                                className={styles.icon}
                            />
                        </div>
                    </div>
            }
        </div>
    )
}