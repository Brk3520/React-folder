import styles from './Pictures.module.css'
import Card from '../Card'
import Card2 from '../Card2'
import Card3 from '../Card3'

export default function Pictures() {
    return (
        <div className={styles.cardcontainer}>
            <Card
                name="Interstellar"
                description="Ein Film über eine Reise durch das Weltall."
                image="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/interstellar-movie-poster.jpg"
            />
            <Card2
                name="Der König der Löwen"
                description="Ein junger Löwe erlebt ein großes Abenteuer."
                image="https://www.cinestar.de/media/cache/web_l/media/filmbilder/d/der-koenig-der-loewen-3d/der-koenig-der-loewen-3d_poster.jpg"
            />
            <Card3
                name="Harry Potter"
                description="Ein junger Zauberer besucht eine besondere Schule."
                image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Harry-Potter-goblet-of-fire.jpg"
            />
            <Card
                name="Spider-Man: Brand New Day"
                description="Peter Parker erlebt ein neues Abenteuer als Spider-Man."
                image="https://tse3.mm.bing.net/th/id/OIP.OkXYCfWuMLZOuo79DBtQOwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            />
            <Card2
                name="Avatar: Fire and Ash"
                description="Ein neues Abenteuer auf dem Planeten Pandora."
                image="https://tse1.explicit.bing.net/th/id/OIP.kxjSJRxUzGP-9uxUZf6u8wHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            />
            <Card3
                name="Dune: Part Two"
                description="Paul Atreides kämpft um seine Zukunft auf Arrakis."
                image="https://th.bing.com/th?id=OIF.LyR%2bdwpCIr%2fevHQj1L0Dew&r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            />
        </div>
    )
}
