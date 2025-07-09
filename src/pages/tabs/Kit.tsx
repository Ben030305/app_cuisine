import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import './../Page.css';
import './Kit.css';

const Kit: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Kit candidat libre<br></br></IonText>
        <IonText class='corps_kit'>
          <br></br>
          <h2>Texte</h2>
          <p>non faut se connecter</p>
        </IonText>
        <IonButton href='/login'>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Kit;
