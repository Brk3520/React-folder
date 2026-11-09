
import styles from './Card2.module.css'
import LikeDislike from './LikeDislike'

type Props = {
    name: string
    description: string
    image: string
}

export default function Card2({ name, description, image }: Props) {
    const words = ['Löwen', 'Abenteuer', 'Held', 'Schurke', 'König']
    const randomWord1 = words[Math.floor(Math.random() * words.length)]
    const randomWord2 = words[Math.floor(Math.random() * words.length)]

    return (
        <div className={styles.card2}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <LikeDislike />
            <p>zufällige Wörter: {randomWord1} {randomWord2}</p>
        </div>

    )
}