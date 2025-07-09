import { IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './APropos.css';

const APropos: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonHeader>
        <IonToolbar>
          <IonText class='titre'>À propos</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class='liste'>
          <IonItem routerLink='/article/qui_suis_je' className='item'>
            <IonText>Qui suis-je ?</IonText>
          </IonItem>
          <IonItem routerLink='/article/pourquoi_cuisine_de_base' className='item'>
            <IonText>Pourquoi cuisine de base ?</IonText>
          </IonItem>
          <IonItem routerLink='/article/mentions_legales' className='item'>
            <IonText>Mentions légales</IonText>
          </IonItem>
          <IonItem routerLink='/article/conditions_generales_de_vente' className='item'>
            <IonText>Conditions générales de vente</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default APropos;
