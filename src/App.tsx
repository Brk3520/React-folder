

import styles from './App.module.css'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'


function App() {


  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>

        <Card
          name="Susi"
          image="https://picsum.photos/200/300"
          description="Das ist Susi."
          author="Börki"
        />
        <Card2
          name="Vidal"
          image="https://picsum.photos/200/301"
          description="Das ist Vidal."
          author="Admin"
        />
        <Card3
          title="React"
          description="React ist eine JavaScript-Bibliothek für Benutzeroberflächen."
          topics={['Komponenten', 'HTML in JSX', 'Wiederverwendbarer Code']}
        />


      </div>

    </>

  )
}

export default App
