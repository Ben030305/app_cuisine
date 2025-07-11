import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import './../Page.css';
import './Explorer.css';

const Explorer: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Explorer</IonText>
        <div className='contenu'>
          <IonToolbar class='toolbar_explorer'>
            <IonSearchbar></IonSearchbar>
            <IonList>
              <IonItem>
                <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par catégorie" defaultValue={0}>
                  <IonSelectOption value="0">Par défaut</IonSelectOption>
                  <IonSelectOption value="1">Par popularité</IonSelectOption>
                  <IonSelectOption value="2">Par note moyenne</IonSelectOption>
                  <IonSelectOption value="3">Par date</IonSelectOption>
                  <IonSelectOption value="4">Par prix croissant</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={0}>
                  <IonSelectOption value="0">Par défaut</IonSelectOption>
                  <IonSelectOption value="1">Par popularité</IonSelectOption>
                  <IonSelectOption value="2">Par note moyenne</IonSelectOption>
                  <IonSelectOption value="3">Par date</IonSelectOption>
                  <IonSelectOption value="4">Par prix croissant</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonToolbar>
          <IonList class='article_explorer'>
            <IonItem routerLink='/article' className='item_explorer'>
              <IonImg class='item_image_explorer' src='assets/icon.png' alt='Article 1'></IonImg>
              <IonText class='item_text_explorer'>Article 1</IonText>
              <IonButton fill='outline' slot='end' routerLink='/article/1'>Télécharger</IonButton>
            </IonItem>
            <IonItem routerLink='/article/2' className='item_explorer'>
              <IonImg class='item_image_explorer' src='assets/icon.png' alt='Article 2'></IonImg>
              <IonText class='item_text_explorer'>Article 2</IonText>
              <IonButton fill='outline' slot='end' routerLink='/article/2'>Télécharger</IonButton>
            </IonItem>
            <IonItem routerLink='/article/3' className='item_explorer'>
              <IonImg class='item_image_explorer' src='assets/icon.png' alt='Article 3'></IonImg>
              <IonText class='item_text_explorer'>Article 3</IonText>
              <IonButton fill='outline' slot='end' routerLink='/article/3'>Télécharger</IonButton>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Explorer;
