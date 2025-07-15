import { IonButton, IonContent, IonImg, IonItem, IonList, IonPage, IonRoute, IonRouterLink, IonText } from '@ionic/react';
import './Page.css';
import './Article.css';
import { banane, cocotte, haricot } from '../articlesContent';
import { useState } from 'react';
import { saveAs } from 'file-saver';


interface ArticleProps {
  titre: any;
}

  const handleDownload = () => {
    const element = document.querySelector('article');
    console.log(element);
    if (element) {
      var blob = new Blob([element.innerHTML], { type: 'text/html' });
      saveAs(blob, 'article.html');
    }
  };

const Article: React.FC<ArticleProps> = ({ titre }) => {

  const [article, setArticle] = useState(titre);

  function loadPage(titre: any){
    return (
      <IonPage className='format'>
        <IonContent fullscreen>
        <IonText>
          {titre}
        </IonText>
        <IonButton onClick={handleDownload}>Télécharger l'article</IonButton>
        <IonList>
            <IonItem onClick={() => {setArticle(banane)}}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 1'></IonImg>
              <IonText slot='end'> Texte Article Connexe 1 </IonText>
            </IonItem>
            <IonItem onClick={() => {setArticle(cocotte)}}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 2'></IonImg>
              <IonText slot='end'> Texte Article Connexe 2 </IonText>
            </IonItem>
            <IonItem onClick={() => {setArticle(haricot)}}>
              <IonImg class='item_image' src='assets/icon.png' alt='Article Connexe 3'></IonImg>
              <IonText slot='end'> Texte Article Connexe 3 </IonText>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <>
      {loadPage(article)}
    </>
  );
};

export default Article;