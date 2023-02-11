import { useState } from "react";

import { AboutModal } from "./AboutModal/";

import { MoonStars, Question, SunHorizon } from "phosphor-react";
import styles from './OverHeader.module.css';


interface OverHeaderProps {
    isDarkTheme: boolean;
    stateManagement: any[];
}

export function OverHeader({ isDarkTheme, stateManagement }: OverHeaderProps) {
    const [darkTheme, setDarkTheme] = stateManagement;
    const [openModal, setOpenModal] = useState(false);

    function handleChangeTheme() {
        setDarkTheme(!darkTheme)
    }

    function handleOpenModal() {
        setOpenModal(!openModal)
    }




    return (
        <div className={styles.container}>

            { openModal ? <AboutModal toggle={handleOpenModal} /> : null}

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
                    onClick={handleOpenModal}
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