import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import {listeArticles } from '../ConstructeurArticle';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';
import './Page.css';
import './Article.css';


interface ArticleProps {
  props: any;
}

const Article: React.FC<ArticleProps> = ({ props }) => {

  function buildItem() {
    return (
        <IonList className='liste_article'>
          {props.articlesConnexes.map((indice: number) => (
            <IonItem routerLink={listeArticles[indice].route}>
              <IonImg class='item_image' src={listeArticles[indice].image} alt={listeArticles[indice].titre}></IonImg>
              <IonText slot='end'> {listeArticles[indice].titre} </IonText>
            </IonItem>
          ))}
        </IonList>
      );
  }

  function loadPage(titre: any) {
    return (
      <IonPage className='format'>
        <IonContent fullscreen>
          <IonText>
            {titre}
          </IonText>
          <IonButton onClick={handleDownload}>Télécharger l'article</IonButton>
          {buildItem()}
        </IonContent>
      </IonPage>
    );
  }

  const handleDownload = async () => {
    const element = document.querySelector('article');
    if (element) {
      var blob = new Blob([element.innerHTML], { type: 'text/html' });
      await write_blob({
        blob: blob,
        path: `${props.titre}.html`,
        directory: Directory.Documents,
        fast_mode: true,
        });
    }
  };

  return (
    <>
      {loadPage(props.contenu)}
    </>
  );
};

export default Article;