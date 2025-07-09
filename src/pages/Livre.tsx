import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Livre.css';

const Livre: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Titre livre</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Livre;
