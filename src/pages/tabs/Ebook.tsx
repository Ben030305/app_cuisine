import { IonContent, IonPage, IonText } from '@ionic/react';
import './../Page.css';
import './Ebook.css';

const Ebook: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Ebook</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Ebook;
