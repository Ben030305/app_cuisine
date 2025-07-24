import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import './Page.css';
import './Livre.css';

interface LivreProps {
  props: any;
}

const Livre: React.FC<LivreProps> = ({ props }) => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>{props.titre} - <span className='prix_livre'>{props.tarif}€</span></IonText>
        <div className='contenu'>
          <IonImg className="img_livre" src={props.image}></IonImg>
          <IonText class='texte_livre'>
            {props.description}
          </IonText>
          <div className='bouton_centre'>
            <IonButton color="primary" href={props.lien}>Acheter</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Livre;
