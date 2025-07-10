import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import './../Page.css';
import './Coaching.css';

const Coaching: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Coaching CAP</IonText>
        <IonText class='contenu_coaching'>
          <h1>1er titre</h1>
          <p>1er paragraphe</p>
          <h2>2ème titre</h2>
          <p>2ème paragraphe</p>
          <img src='assets/icon.png' alt='Icon'></img>
          <br></br>
        </IonText>
        <IonButton className='button'>Réserver un appel</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Coaching;
