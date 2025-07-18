import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import './Page.css';

import './Accueil.css';
import { listeArticles } from '../ConstructeurArticle';

const tailleListe = 10;
const articles = listeArticles;
articles.length = tailleListe;

function buildAccueil() {
  return (
      <IonList className='liste_accueil'>
        {articles.map(article => (
          <IonItem routerLink={article.route} key={article.titre}>
            <IonImg class='item_image' src={article.image} alt={article.titre}></IonImg>
            <IonText class='item_text_accueil'>{article.titre}</IonText>
            <IonButton fill='outline' slot='end' routerLink={article.route}>Télécharger</IonButton>
          </IonItem>
        ))}
      </IonList>
    );
}
const Accueil: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Accueil</IonText>
        <div className='contenu'>
          {buildAccueil()}
          <IonButton expand='full' fill='solid' routerLink='/a_propos'>
            <IonText>À propos</IonText>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
