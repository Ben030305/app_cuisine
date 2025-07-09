import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './APropos.css';

const APropos: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>À propos</IonText>
      </IonContent>
    </IonPage>
  );
};

export default APropos;
