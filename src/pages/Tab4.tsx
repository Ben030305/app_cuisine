import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab.css';
import './Tab4.css';

{
  // Page pour le coaching CAP, appelé tab4 pour plus de simplicité à écrire le code.
}

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coaching CAP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText class='texte'>Coaching CAP</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
