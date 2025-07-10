import { IonCol, IonContent, IonGrid, IonImg, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonText } from '@ionic/react';
import './../Page.css';
import './Ebook.css';

const Ebook: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Ebook</IonText>
        <IonList class='marge_ebook'>
          <IonItem>
            <IonSelect aria-label="Filtre" interface="popover" placeholder="Tri" defaultValue={0}>
              <IonSelectOption value="defaut">Par défaut</IonSelectOption>
              <IonSelectOption value="popularite">Par popularité</IonSelectOption>
              <IonSelectOption value="note">Par note moyenne</IonSelectOption>
              <IonSelectOption value="date">Par date</IonSelectOption>
              <IonSelectOption value="prix_croissant">Par prix croissant</IonSelectOption>
              <IonSelectOption value="prix_decroissant">Par prix décroissant</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonGrid fixed={true} class='marge_ebook'>
          <IonRow class="row_ebook">
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 1</IonText>
              </IonRouterLink>
            </IonCol>
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 2</IonText>
              </IonRouterLink>
            </IonCol>
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 3</IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 4</IonText>
              </IonRouterLink>
            </IonCol>
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 5</IonText>
              </IonRouterLink>
            </IonCol>
            <IonCol>
              <IonRouterLink routerLink='ebook/livre' color={'dark'}>
                <IonImg className="img_ebook" src="assets/livre.jpg"></IonImg>
                <IonText class='text_ebook'>Livre 6</IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Ebook;
