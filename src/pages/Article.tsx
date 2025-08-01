import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonText, IonToast } from '@ionic/react';
import { mapArticles } from '../ConstructeurArticle';
import { Directory } from '@capacitor/filesystem';
import { Clipboard } from '@capacitor/clipboard';
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
        {props.articlesConnexes.map((titre: string) => (
          <IonItem className='item_liste' routerLink={mapArticles.get(titre).route} key={mapArticles.get(titre).titre}>
            <IonImg class='item_image' src={mapArticles.get(titre).image} alt={mapArticles.get(titre).titre}></IonImg>
            <IonText class='item_texte_liste'> {mapArticles.get(titre).titre} </IonText>
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
          <div className='bouton_centre'>
            <IonButton id={'download_' + props.titre} onClick={handleDownload}>Télécharger l'article</IonButton>
            <IonButton id={'share' + props.titre} onClick={() => shareArticle(props.lien)}>Partager l'article</IonButton>
          </div>
          {buildItem()}
          <IonToast trigger={'download_' + props.titre} message={`Article ${props.titre} téléchargé dans Documents`} duration={3000}></IonToast>
          <IonToast trigger={'share' + props.titre} message={`Lien de l'article copié dans le presse papier`} duration={3000}></IonToast>
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