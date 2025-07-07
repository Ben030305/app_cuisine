import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab.css';
import './Tab3.css';

{
  // Page pour explorer, appelé tab3 pour plus de simplicité à écrire le code.
}

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Explorer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText class='texte'>Explorer</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
