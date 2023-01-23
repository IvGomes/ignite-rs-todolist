import styles from './Header.module.css';


export function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.logo}>
                <img className={styles.image} src="rocket.svg" alt="" />
                <span className={styles.textBlue}>to</span>
                <span className={styles.textPurple}>do</span>
            </h1>
        </header>
    )
}