import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Coaching.css';

const Coaching: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Coaching CAP</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Coaching;
