import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import { banane, cocotte, haricot } from '../ConstructeurArticle';
import { useState } from 'react';
import { Directory } from '@capacitor/filesystem';
import write_blob from 'capacitor-blob-writer';
import './Page.css';
import './Article.css';


interface ArticleProps {
  props: any;
}

const Article: React.FC<ArticleProps> = ({ props }) => {

  const [article, setArticle] = useState(props);

  function loadPage(titre: any) {
    return (
      <IonPage className='format'>
        <IonContent fullscreen>
          <IonText>
            {titre}
          </IonText>
          <IonButton onClick={handleDownload}>Télécharger l'article</IonButton>
          <IonList>
            <IonItem onClick={() => { setArticle(banane) }}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 1'></IonImg>
              <IonText slot='end'> Texte Article Connexe 1 </IonText>
            </IonItem>
            <IonItem onClick={() => { setArticle(cocotte) }}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 2'></IonImg>
              <IonText slot='end'> Texte Article Connexe 2 </IonText>
            </IonItem>
            <IonItem onClick={() => { setArticle(haricot) }}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 3'></IonImg>
              <IonText slot='end'> Texte Article Connexe 3 </IonText>
            </IonItem>
          </IonList>
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
        path: `${article.titre}.html`,
        directory: Directory.Documents,
        fast_mode: true,
        });
    }
  };

  return (
    <>
      {loadPage(article.contenu)}
    </>
  );
};

export default Article;