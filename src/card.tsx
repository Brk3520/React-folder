import styles from './Card.module.css'

import LikeDislike from './LikeDislike'

type Props = {
    name: string
    description: string
    image: string
}

export default function Card({ name, description, image }: Props) {
    const rating = Math.floor(Math.random() * 5) + 1

    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>Zufällige Bewertung: {rating} von 5 Sternen</p>
            <LikeDislike />
        </div>

    )
}