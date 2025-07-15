import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import './Page.css';
import './Livre.css';

const Livre: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Titre livre<br></br></IonText>
        <div className='contenu'>
          <IonImg className="img_livre" src="assets/livre.jpg"></IonImg>
          <IonText>
          <div>
            <h2>Infos sur le produit</h2>
            <p>Chef d'oeuvre</p>
            <h2>Livres similaires</h2>
          </div>
          </IonText>
          <IonButton color="primary" href='https://cuisinedebase.com/produit/25-fiches-techniques-pour-preparer-le-cap-cuisine/'>Acheter</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Livre;
