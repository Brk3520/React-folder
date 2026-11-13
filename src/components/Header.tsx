import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <h1>Filme</h1>
            <span>🎬</span>
        </div>
    )
}
