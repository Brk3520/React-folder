
import styles from './Card2.module.css'

type Props = {
    name: string
    image: string
    description: string
    author: string
}

export default function Card2({ name, image, description, author }: Props) {
    return (
        <div className={styles.card2}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>made by {author}</p>
        </div>

    )
}