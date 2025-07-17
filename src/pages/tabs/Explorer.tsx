import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { listeArticles } from '../../ConstructeurArticle';
import './../Page.css';
import './Explorer.css';

{
  // Pour categorie -> 0 est l'état sans filtrage),
  // Pour sous_categorie -> -1 correspond à l'absence de sous-catégorie et 0 à l'état sans filtrage.
}

const Explorer: React.FC = () => {

  const [categorie, setCategorie] = useState("0");
  const [sousCategorie, setSousCategorie] = useState("0");
  const [articles, setArticles] = useState(listeArticles);
  const [display, setDisplay] = useState(false);


  function triCategorie(newCategorie: string) {
    let articlesFiltres = listeArticles;
    if(newCategorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.categorie == newCategorie;
      });
      if(articlesFiltres.length > 0 && articlesFiltres[0].sous_categorie == "-1") {
        setDisplay(false);
        // hide button
      } else {
        setDisplay(true);
        // display button
      }
      // function to display or hide button sous-categorie
    } else {
      setDisplay(false);
    }
    return articlesFiltres;
  }

  function triSousCategorie(categorie: string, newSousCategorie: string) {
    let articlesFiltres = triCategorie(categorie);
    if(newSousCategorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.sous_categorie == newSousCategorie;
      });
    }
    return articlesFiltres;
  }

  {
    // Ne pas oublier d'actualiser la valeur d'articles !!
  }

  function loadButton() {
    if(display) {      
      switch(categorie) {
        case "1":
          return (
            <IonList>
              <IonItem>
              <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={"0"} onIonChange={(e) => {
                if(display) {
                  const sous_categorie = e.detail.value;
                  setSousCategorie(sous_categorie);
                  const res = triSousCategorie(categorie, sous_categorie);
                  setArticles(res);
                }
              }}>
                {
                  // SOUS-CATEGORIE DE "Formation CAP cuisine"
                }
                <IonSelectOption value="0">Aucune sous-catégorie</IonSelectOption>
                <IonSelectOption value="1">Comment s'organiser et se préparer</IonSelectOption>
                <IonSelectOption value="2">Détails des Bases et Techniques</IonSelectOption>
                <IonSelectOption value="3">Etre cuisinier professionnel</IonSelectOption>
                <IonSelectOption value="4">Fiches techniques</IonSelectOption>
              </IonSelect>
              </IonItem>
            </IonList>
          )
        case "3":
          return (
            <IonList>
            <IonItem>
            <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={"0"} onIonChange={(e) => {
              if(display) {
                  const sous_categorie = e.detail.value;
                  setSousCategorie(sous_categorie);
                  const articles = triSousCategorie(categorie, sous_categorie);
                  setArticles(articles);
              }
            }}>
              {
                // SOUS-CATEGORIE DE "Vivre autrement"
              }
              <IonSelectOption value="0">Aucune sous-catégorie</IonSelectOption>
              <IonSelectOption value="5">Etat d'esprit</IonSelectOption>
              <IonSelectOption value="6">Reconversion professionnel</IonSelectOption>
            </IonSelect>
            </IonItem>
            </IonList>
          )
      }
    }
  }

  function loadPage() {
    return (
      <IonPage className='format'>
        <IonContent fullscreen>
          <IonText class='titre'>Explorer</IonText>
          <div className='contenu'>
            <IonToolbar class='toolbar_explorer'>
              <IonSearchbar></IonSearchbar>
              <IonList>
                <IonItem>
                  <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par catégorie" onIonChange={(e) => {
                    const newCategorie = e.detail.value;
                    setCategorie(newCategorie);
                    const articles = triSousCategorie(newCategorie, "0");
                    setArticles(articles);
                  }}>
                    <IonSelectOption value="0">Aucune catégorie</IonSelectOption>
                    <IonSelectOption value="1">Formation CAP cuisine</IonSelectOption>
                    <IonSelectOption value="2">Podcast</IonSelectOption>
                    <IonSelectOption value="3">Vivre autrement</IonSelectOption>
                    <IonSelectOption value="4">Vlog</IonSelectOption>
                    <IonSelectOption value="5">Autre</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
                  <>
                    {loadButton()}
                  </>
            </IonToolbar>
            <IonList class='article_explorer'>
              {articles.map((article, index) => (
                <IonItem key={index} routerLink='/article' className='item_explorer'>
                  <IonImg class='item_image' src='assets/icon.png' alt={article.titre}></IonImg>
                  <IonText class='item_text_explorer'>{article.titre}</IonText>
                  <IonButton fill='outline' slot='end' routerLink='/article'>Télécharger</IonButton>
                </IonItem>
              ))}
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    );
  };

  return (
    <>
      {loadPage()}
    </>
  );
};

export default Explorer;
