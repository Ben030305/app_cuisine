import { IonContent, IonPage, IonText } from '@ionic/react';
import './../Page.css';
import './Explorer.css';

const Explorer: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Explorer</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Explorer;
