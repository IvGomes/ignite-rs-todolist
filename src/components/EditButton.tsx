import { Check, PencilLine } from 'phosphor-react';
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
                    ?   <div
                            className={`${styles[theme]} ${styles.box}`}
                            onClick={onClickEdit}
                        >
                            <PencilLine
                                weight='bold'
                                className={styles.icon}
                            />
                        </div>
                    :   <div
                            className={`${styles.box} ${styles.boxConfirm}`}
                            onClick={onClickEdit}
                        >
                            <Check
                                weight='bold'
                                className={styles.icon}
                            />
                        </div>
            }
        </div>
    )
}