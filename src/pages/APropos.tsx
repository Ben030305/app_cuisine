import { IonContent, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import './Page.css';
import './APropos.css';

const APropos: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>À propos</IonText>
        <div className='contenu'>
          <IonList class='liste_a_propos'>
            <IonItem routerLink='/qui_suis_je' className='item_a_propos'>
              <IonText>Qui suis-je ?</IonText>
            </IonItem>
            <IonItem routerLink='/pourquoi_cuisine_de_base' className='item_a_propos'>
              <IonText>Pourquoi cuisine de base ?</IonText>
            </IonItem>
            <IonItem routerLink='/mentions_legales' className='item_a_propos'>
              <IonText>Mentions légales</IonText>
            </IonItem>
            <IonItem routerLink='/conditions_generales_de_vente' className='item_a_propos'>
              <IonText>Conditions générales de vente</IonText>
            </IonItem>
            <IonItem routerLink='/tutoriel' className='item_a_propos'>
              <IonText>Tutoriel de l'application</IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default APropos;
