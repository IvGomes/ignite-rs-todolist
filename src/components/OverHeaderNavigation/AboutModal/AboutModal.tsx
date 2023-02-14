import { X } from 'phosphor-react';
import styles from './AboutModal.module.css';

import reactLogo from './../../../assets/react-2.svg';


interface AboutModalProps {
    toggle: () => void;
}

export function AboutModal({ toggle }: AboutModalProps) {

    return (
        <div className={styles.containerModal}>
            <div
                className={styles.fancerModal}
                onClick={toggle}
            >
            </div>
            <div className={styles.modal}>
                <h1 className={styles.titleModal}>
                    Obrigado pelo seu apoio!
                    <button onClick={toggle}><X weight='bold' /></button>
                </h1>
                <div className={styles.bodyModal}>
                    <span className={styles.details}>
                        <p>
                            Esse projeto é uma melhoria (<strong>Next level</strong>) do primeiro desafio padrão da trilha <a className={styles.igniteLink} href='https://www.rocketseat.com.br/ignite'>Ignite</a> de especialização em React da Rocketseat. <br />
                            TODO LIST básica aplicando os conceitos abordados no primeiro bloco do módulo de ReactJS.
                        </p>
                        <p>
                            Aqui na página existe um botão para exibir a versão pura do desafio, sem as adições presente nesta versão <strong>NextLevel</strong>.
                        </p>
                        <p>
                            Um dos maiores desafios foi trabalhar sem utilizar a contextAPI e CSS Modules para estilo.
                            Como já possuo um conhecimento avançado em React, é costume utilizar tailwind e contextAPI em meus projetos, além de já ter iniciado os estudos usando essas ferramentas. Mas foi interessante aprimorar minha adaptabilidade saindo da zona de conforto.
                        </p>
                    </span>
                    <ul>
                        <h3>Recursos extra:</h3>
                        <li>
                            Persistencia de dados usando LocalStorage
                        </li>
                        <li>
                            Tema light
                        </li>
                        <li>
                            Edição de tasks
                        </li>
                    </ul>

                    <span className={styles.badges}>
                        <h3>
                            Tecnologias usadas:
                        </h3>
                        <span>
                            <img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} alt="" />
                            <img src={'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'} alt="" />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}