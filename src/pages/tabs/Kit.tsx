import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import './../Page.css';

const Kit: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Kit candidat libre<br></br></IonText>
        <div className='contenu'>
          <IonText class='corps_kit'>
            <p><b>Bienvenue sur mon Blog !</b> 🙂 <br></br>
              Recevez gratuitement en complément mon guide
              <b> « Le kit du candidat libre au CAP cuisine ».</b> <br></br>
              Vous y trouverez :
              <ul>
                <li>
                  <b>La procédure d’inscription</b>
                </li>
                <li>
                  <b>Les livres à acheter</b>
                </li>
                <li>
                  <b>Des fiches techniques</b>
                </li>
                <li>
                  <b>Un programme d’entrainement sur 6 mois</b>                
                </li>
              </ul>
            </p>
          </IonText>
          <div className='bouton_centre'>
            <IonButton href='/login'>Acceder au Kit</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Kit;
