import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonText, IonToast } from '@ionic/react';
import { listeArticles } from '../ConstructeurArticle';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';
import './Page.css';
import './Article.css';
import { Clipboard } from '@capacitor/clipboard';


interface ArticleProps {
  props: any;
}

const Article: React.FC<ArticleProps> = ({ props }) => {

  function buildItem() {
    return (
      <IonList className='liste_article'>
        {props.articlesConnexes.map((indice: number) => (
          <IonItem routerLink={listeArticles[indice].route} key={listeArticles[indice].titre}>
            <IonImg class='item_image' src={listeArticles[indice].image} alt={listeArticles[indice].titre}></IonImg>
            <IonText slot='end'> {listeArticles[indice].titre} </IonText>
          </IonItem>
        ))}
      </IonList>
    );
  }

  function loadPage(contenu: any) {
    return (
      <IonPage className='format'>
        <IonContent fullscreen>
          <IonText>
            {contenu}
          </IonText>
          <IonButton id='download' onClick={handleDownload}>Télécharger l'article</IonButton>
          <IonButton id='share' onClick={() => shareArticle(props.lien)}>Partager l'article</IonButton>
          {buildItem()}
          <IonToast trigger='download' message={`Article ${props.titre} téléchargé dans Documents`} duration={5000}></IonToast>
          <IonToast trigger='share' message={`Lien de l'article copié dans le presse papier`} duration={5000}></IonToast>
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

  const shareArticle = async (lien: string) => {
    await Clipboard.write({
      string: lien
    });
  }

  return (
    <>
      {loadPage(props.contenu)}
    </>
  );
};

export default Article;