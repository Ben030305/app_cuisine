import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

{
  // Page du kit du débutant, appelé tab1 pour plus de simplicité à écrire le code
}

function handleClick() {
  alert("test");
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        {
          // texte au milieu de la page
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
