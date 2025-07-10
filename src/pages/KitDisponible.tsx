import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import './Page.css';
import './KitDisponible.css';

const KitDisponible: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Kit disponible !<br></br></IonText>
        <IonText>
          <div className='corps_kit_disponible'>
            <br></br>
            <h2>Texte</h2>
            <p>Ouais tu peux avoir le kit etc</p>
          </div>
        </IonText>
        <IonButton className='bouton_a_propos'>Télécharger</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default KitDisponible;
