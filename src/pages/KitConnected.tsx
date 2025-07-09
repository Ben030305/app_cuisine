import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './KItConnected.css';

const KitConnected: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Kit disponible !</IonText>
      </IonContent>
    </IonPage>
  );
};

export default KitConnected;
