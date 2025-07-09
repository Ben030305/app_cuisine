import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Accueil.css';
import { Route } from 'react-router';
import APropos from './APropos';

const Accueil: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonRouterOutlet>
        <Route exact path="/a_propos" component={APropos} />
      </IonRouterOutlet>
      <IonContent fullscreen>
        <IonText class='titre'>Accueil</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
