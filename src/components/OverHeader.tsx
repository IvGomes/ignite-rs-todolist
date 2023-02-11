import { MoonStars, Question, SunHorizon } from "phosphor-react";
import styles from './OverHeader.module.css';


interface OverHeaderProps {
    isDarkTheme: boolean;
    stateManagement: any[];
}

export function OverHeader({ isDarkTheme, stateManagement }: OverHeaderProps) {
    const [darkTheme, setDarkTheme] = stateManagement;

    function handleChangeTheme() {
        setDarkTheme(!darkTheme)
    }


    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button
                    className={`${styles.buttonRounded}`}
                    onClick={handleChangeTheme}
                    title={isDarkTheme ? "Tema claro" : "Tema escuro"}
                >
                    {isDarkTheme ? <SunHorizon /> : <MoonStars />}
                </button>
                <button
                    className={`${styles.buttonRounded}`}
                    title="Mais sobre o projeto"
                >
                    <Question />
                </button>
                <button
                    className={`${styles.buttonLinkVersion}`}
                >
                    <span>Versão Rocketseat</span>
                </button>
            </div>
        </div>
    )
}