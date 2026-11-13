import styles from './Content.module.css'
import Pictures from './Pictures'

export default function Content() {
    return (
        <div className={styles.container}>
            <div>Menu</div>
            <Pictures />
        </div>
    )
}
