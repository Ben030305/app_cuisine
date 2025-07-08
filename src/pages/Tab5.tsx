import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab.css';
import './Tab5.css';

{
  // Page pour le kit candidat libre, appelé tab5 pour plus de simplicité à écrire le code.
}

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText class='texte'>Kit candidat libre</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
