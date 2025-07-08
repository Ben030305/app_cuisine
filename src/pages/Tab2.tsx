import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab.css';
import './Tab2.css';

{
  // Page du ebook, appelé tab2 pour plus de simplicité à écrire le code.
}

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonText class='texte'>Ebook</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
