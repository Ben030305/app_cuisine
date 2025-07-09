import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './../Page.css'
import './Debutant.css';

const Debutant: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Accueil débutant</IonText>
      </IonContent>
    </IonPage>
  );
}

export default Debutant;
