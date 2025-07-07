import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab.css'
import './Tab1.css';

{
  // Page du kit du débutant, appelé tab1 pour plus de simplicité à écrire le code.
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil débutant</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText class='texte'>Accueil débutant</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
