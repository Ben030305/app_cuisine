import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonPage, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Accueil.css';
import { Route } from 'react-router';
import APropos from './APropos';

const Accueil: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonHeader>
        <IonText class='titre'>Accueil</IonText>
      </IonHeader>
      <IonContent fullscreen>
        <br/><br/><br></br>
        <IonItem routerLink='/article' className='item'>
          <IonImg class='item_image' src='resources/icon.png' alt='Article 1'></IonImg>
          <IonText class='item_text'>Article 1</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/1'>Télécharger</IonButton>
        </IonItem>
        <IonItem routerLink='/article/2' className='item'>
          <IonImg class='item_image' src='resources/icon.png' alt='Article 2'></IonImg>
          <IonText class='item_text'>Article 2</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/2'>Télécharger</IonButton>
        </IonItem>
        <IonItem routerLink='/article/3' className='item'>
          <IonImg class='item_image' src='resources/icon.png' alt='Article 3'></IonImg>
          <IonText class='item_text'>Article 3</IonText>
          <IonButton fill='outline' slot='end' routerLink='/article/3'>Télécharger</IonButton>
        </IonItem>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <IonButton expand='full' fill='solid' routerLink='/a_propos' className='a_propos_button'>
          <IonText class='a_propos_text'>À propos</IonText>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
