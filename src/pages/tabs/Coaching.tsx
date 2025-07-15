import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import './../Page.css';
import './Coaching.css';

const Coaching: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Coaching CAP</IonText>
        <div className='contenu'>
          <IonText class='corps_texte'>
            <h1>1er titre</h1>
            <p>1er paragraphe</p>
            <h2>2ème titre</h2>
            <p>2ème paragraphe</p>
            <img src='assets/icon.png' alt='Icon' className='coaching_img'></img>
            <br></br>
          </IonText>
          <IonButton className='button' href='https://calendly.com/professeurhyoussef/rdv-de-decouverte-cuisine-de-base'>Réserver un appel</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Coaching;
