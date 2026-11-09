import { useState } from 'react'
import styles from './LikeDislike.module.css'

export default function LikeDislike() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    return (
        <div className={styles.buttons}>
            <button onClick={() => setLikes(likes + 1)}>
                Like {likes}
            </button>
            <button onClick={() => setDislikes(dislikes + 1)}>
                Dislike {dislikes}
            </button>
        </div>
    )
}
