import styles from './AboutModal.module.css';


interface AboutModalProps {
    toggle: () => void;
}

export function AboutModal({ toggle }: AboutModalProps) {
    
    return (
        <div>
            <div
                className={styles.fancerModal}
                onClick={toggle}
            >
            </div>
            <div className={styles.modal}>
                <div className={styles.titleModal}>
                    Obrigado pelo seu apoio!
                </div>
                <div className={styles.bodyModal}>
                    Esse projeto é uma melhoria (Next level) do primeiro desafio padrão da trilha ignite de especialização em React
                    da Rocketseat.
                    É uma To do List básica aplicando todos os conceitos abordados no primeiro bloco do módulo de ReactJS.

                    Aqui na página existe um botão para exibir a versão pura do desafio, sem as adições presente nesta versão NextLevel.

                    Um dos maiores desafios foi trabalhar sem utilizar a contextAPI e utilizando apenas CSS Modules.
                    Como já possuo um conhecimento avançado em React, é costume utilizar tailwind e contextAPI em meus projetos, além de que
                    já comecei os estudos usando essas ferramentas. Então não usa-las foi um aprendizando complicado e desafiador, mas superado com sucesso.

                    Recursos extra:
                    - Persistencia de dados usando LocalStorage
                    - Tema light
                    - Edição de tasks

                    Tecnologias usadas:
                    ReactJS / Typescript
                </div>
                <div>
                    <button onClick={toggle}>Fechar</button>
                </div>
            </div>
        </div>
    )
}