import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import './../Page.css'
import './Debutant.css';

const Debutant: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Accueil débutant</IonText>
        <div className='contenu'>
          <IonText class='contenu'>
            <h1>1er titre</h1>
            <p>1er paragraphe</p>
            <h2>2ème titre</h2>
            <p>2ème paragraphe</p>
            <a href='https://youtube.com'>youtube</a>
            <br></br>
          </IonText>
          <IonButton className='button' routerLink='/kit'>Télécharger le kit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Debutant;
