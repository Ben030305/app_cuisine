import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { listeArticles } from '../../ConstructeurArticle';
import './../Page.css';
import './Explorer.css';

const Explorer: React.FC = () => {

  const [articles, setArticles] = useState(listeArticles)

  function triCategorie(categorie: string) {
    let articlesFiltres = listeArticles;
    if(categorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.categorie == categorie;
      });
    }
    return articlesFiltres;
  }

  function triSousCategorie(categorie: string, sous_categorie: string) {
    let articlesFiltres = triCategorie(categorie);
    if(sous_categorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.sous_categorie == sous_categorie;
      });
    }
    console.log(articlesFiltres);
    
    return articlesFiltres;
  }

  {
    // Ne pas oublier de setArticles(triSousCategorie) ou setArticles(triCategorie) !!
  }

  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Explorer</IonText>
        <div className='contenu'>
          <IonToolbar class='toolbar_explorer'>
            <IonSearchbar></IonSearchbar>
            <IonList>
              <IonItem>
                <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par catégorie" defaultValue={0} onIonChange={(e) => setArticles(triCategorie(e.detail.value))}>
                  <IonSelectOption value="0">Aucune catégorie</IonSelectOption>
                  <IonSelectOption value="1">Formation CAP cuisine</IonSelectOption>
                  <IonSelectOption value="2">Podcast</IonSelectOption>
                  <IonSelectOption value="3">Vivre autrement</IonSelectOption>
                  <IonSelectOption value="4">Vlog</IonSelectOption>
                  <IonSelectOption value="5">Autre</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                {
                  // Mettre variable pour la catégorie courante, crash possible si "articles" est vide.
                }
                <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={0} onIonChange={(e) => setArticles(triSousCategorie(articles[0].categorie, e.detail.value))}>
                  {
                    // SOUS-CATEGORIE DE "Formation CAP cuisine"
                  }
                  <IonSelectOption value="0">Aucune sous-catégorie</IonSelectOption>
                  <IonSelectOption value="1">Comment s'organiser et se préparer</IonSelectOption>
                  <IonSelectOption value="2">Détails des Bases et Techniques</IonSelectOption>
                  <IonSelectOption value="3">Etre cuisinier professionnel</IonSelectOption>
                  <IonSelectOption value="4">Fiches techniques</IonSelectOption>
                  {
                    // SOUS-CATEGORIE DE "Vivre autrement"
                  }
                  <IonSelectOption value="5">Etat d'esprit</IonSelectOption>
                  <IonSelectOption value="6">Reconversion professionnel</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonToolbar>
          <IonList class='article_explorer'>
            <IonItem routerLink='/article' className='item_explorer'>
              <IonImg class='item_image' src='assets/icon.png' alt='Article 1'></IonImg>
              <IonText class='item_text_explorer'>Article 1</IonText>
              <IonButton fill='outline' slot='end' routerLink='/article/1'>Télécharger</IonButton>
            </IonItem>
            <IonItem routerLink='/article/2' className='item_explorer'>
              <IonImg class='item_image' src='assets/icon.png' alt='Article 2'></IonImg>
              <IonText class='item_text_explorer'>Article 2</IonText>
              <IonButton fill='outline' slot='end' routerLink='/article/2'>Télécharger</IonButton>
            </IonItem>
            <IonItem routerLink='/article/3' className='item_explorer'>
              <IonImg class='item_image' src='assets/icon.png' alt='Article 3'></IonImg>
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
