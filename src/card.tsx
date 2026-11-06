import styles from './Card.module.css'
type Props = {
    name: string
    image: string
    description: string
    author: string
}

export default function Card({ name, image, description, author }: Props) {
    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>made by {author}</p>
        </div>

    )
}