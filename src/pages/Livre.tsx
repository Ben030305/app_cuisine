import { IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Livre.css';

const Livre: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Titre livre<br></br></IonText>
        <IonImg className="img" src="/resources/21889.jpg"></IonImg>
        <IonText>
        <div className='corps'>
          <h2>Infos sur le produit</h2>
          <p>Chef d'oeuvre</p>
          <h2>Livres similaires</h2>
        </div>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Livre;
