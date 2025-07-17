import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { listeArticles } from '../../ConstructeurArticle';
import './../Page.css';
import './Explorer.css';

let categorie = "0";
let sous_categorie = "0";
let articles = listeArticles;

{
  // Pour categorie -> 0 est l'état sans filtrage),
  // Pour sous_categorie -> -1 correspond à l'absence de sous-catégorie et 0 à l'état sans filtrage.
}

const Explorer: React.FC = () => {

  const[display, setDisplay] = useState(false);

  function triCategorie() {
    let articlesFiltres = listeArticles;
    if(categorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.categorie == categorie;
      });
      if(articlesFiltres[0].sous_categorie == "-1") {
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

  function triSousCategorie() {
    let articlesFiltres = triCategorie();
    if(sous_categorie != "0") {
      articlesFiltres = articlesFiltres.filter((element) => {
        return element.sous_categorie == sous_categorie;
      });
    }
    return articlesFiltres;
  }

  {
    // Ne pas oublier d'actualiser la valeur d'articles !!
  }

  function loadButton() {
    if(display) {
      console.log(categorie);
      
      switch(categorie) {
        case "1":
          return (
            <IonList>
              <IonItem>
              <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={0} onIonChange={(e) => {
                if(display) {
                  sous_categorie = e.detail.value;
                  articles = triSousCategorie();
                  console.log(("Après triSousCategorie: " + articles));
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
            <IonSelect aria-label="Filtre" interface="popover" placeholder="Filtrer par sous-catégorie" defaultValue={0} onIonChange={(e) => {
              if(display) {
                sous_categorie = e.detail.value;
                articles = triSousCategorie();
                console.log(("Après triSousCategorie: " + articles));
              }
            }}>
              {
                // SOUS-CATEGORIE DE "Vivre autrement"
              }
              <IonSelectOption value="0">Aucune sous-catégorie</IonSelectOption>
              <IonSelectOption value="1">Etat d'esprit</IonSelectOption>
              <IonSelectOption value="2">Reconversion professionnel</IonSelectOption>
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
                    categorie = e.detail.value;
                    articles = triCategorie();
                    console.log("Après triCategorie: " + articles);
                    console.log("display: " + display);
                    
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

  return (
    <>
      {loadPage()}
    </>
  );
};

export default Explorer;
