import styles from './Card3.module.css'

type Props = {
    title: string
    description: string
    topics: string[]
}

export default function Card3({ title, description, topics }: Props) {
    return (
        <div className={styles.card3}>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
        </div>

    )
}
