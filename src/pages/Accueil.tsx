import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import './Page.css';

import './Accueil.css';
import { listeArticles } from '../ConstructeurArticle';

const tailleListe = 6;
const articles = [...listeArticles];
articles.length = tailleListe;

function buildAccueil() {
  return (
      <IonList className='liste_accueil'>
        {articles.map(article => (
          <IonItem className='item_liste' routerLink={article.route} key={article.titre}>
            <IonImg class='item_image' src={article.image} alt={article.titre}></IonImg>
            <IonText class='item_texte_liste'>{article.titre}</IonText>
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
          <IonText>
            <div className='texte_accueil'>
            Bienvenue sur l'application Cuisine de base ! Vous trouverez sur cette page les derniers articles parus. <br></br>
            Si vous êtes novice en cuisine et que vous souhaitez apprendre les bases, rendez-vous dans le menu <b>Débutant</b> !
            </div>
          </IonText>
          {buildAccueil()}
          <div className='bouton_centre'>
            <IonButton expand='block' fill='solid' routerLink='/a_propos'>À propos</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
