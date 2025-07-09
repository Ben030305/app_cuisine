import { IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar } from '@ionic/react';
import './Page.css';
import './APropos.css';

const APropos: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonHeader>
        <IonToolbar>
          <IonText class='titre_a_propos'>À propos</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class='liste_a_propos'>
          <IonItem routerLink='/article/qui_suis_je' className='item_a_propos'>
            <IonText>Qui suis-je ?</IonText>
          </IonItem>
          <IonItem routerLink='/article/pourquoi_cuisine_de_base' className='item_a_propos'>
            <IonText>Pourquoi cuisine de base ?</IonText>
          </IonItem>
          <IonItem routerLink='/article/mentions_legales' className='item_a_propos'>
            <IonText>Mentions légales</IonText>
          </IonItem>
          <IonItem routerLink='/article/conditions_generales_de_vente' className='item_a_propos'>
            <IonText>Conditions générales de vente</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default APropos;
