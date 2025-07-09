import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonPage, IonText } from '@ionic/react';
import './Page.css';

import './Accueil.css';

const Accueil: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonHeader>
        <IonText class='titre'>Accueil</IonText>
      </IonHeader>
      <IonContent fullscreen>
        <br/><br/><br></br>
        <IonItem routerLink='/article' className='item_accueil'>
          <IonImg class='item_image_accueil' src='resources/icon.png' alt='Article 1'></IonImg>
          <IonText class='item_text_accueil'>Article 1</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/1'>Télécharger</IonButton>
        </IonItem>
        <IonItem routerLink='/article/2' className='item_accueil'>
          <IonImg class='item_image_accueil' src='resources/icon.png' alt='Article 2'></IonImg>
          <IonText class='item_text_accueil'>Article 2</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/2'>Télécharger</IonButton>
        </IonItem>
        <IonItem routerLink='/article/3' className='item_accueil'>
          <IonImg class='item_image_accueil' src='resources/icon.png' alt='Article 3'></IonImg>
          <IonText class='item_text_accueil'>Article 3</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/3'>Télécharger</IonButton>
        </IonItem>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        {
          // A CHANGER
        }
        <IonButton expand='full' fill='solid' routerLink='/a_propos'>
          <IonText>À propos</IonText>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
