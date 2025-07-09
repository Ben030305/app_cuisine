import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './../Page.css';
import './Kit.css';

const Kit: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Kit candidat libre</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Kit;
