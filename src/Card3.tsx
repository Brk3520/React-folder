import styles from './Card3.module.css'
import LikeDislike from './LikeDislike'

type Props = {
    name: string
    description: string
    image: string
}

export default function Card3({ name, description, image }: Props) {
    return (
        <div className={styles.card3}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <LikeDislike />
        </div>

    )
}
