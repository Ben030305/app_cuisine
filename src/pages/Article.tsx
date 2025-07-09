import { IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Article.css';

const Article: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='article_text'>
          <h1>Titre Article</h1>
          <img className='article_image' src='resources/icon.png' alt='Titre Article'></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
          <p>
            Integer in mauris eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. 
            In eleifend quam a odio. In hac habitasse platea dictumst. 
            Maecenas ut massa quis augue luctus tincidunt. Nulla facilisi.
          </p>
          <p>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. 
            Donec consectetuer ligula vulputate sem tristique cursus. 
            Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
          </p>
          <p>
            Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. 
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
          <p>
            Integer in mauris eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. 
            In eleifend quam a odio. In hac habitasse platea dictumst. 
            Maecenas ut massa quis augue luctus tincidunt. Nulla facilisi.
          </p>
        </IonText>

        <IonList class='article_list'>
          <IonItem routerLink='/article/1'>
            <IonImg class='article_image' src='resources/icon.png' alt='Article Connexe 1'></IonImg>
            <IonText slot='end' class='article_text'> Texte Article Connexe 1 </IonText>
          </IonItem>
          <IonItem routerLink='/article/2'>
            <IonImg class='article_image' src='resources/icon.png' alt='Article Connexe 2'></IonImg>
            <IonText slot='end' class='article_text'> Texte Article Connexe 2 </IonText>
          </IonItem>
          <IonItem routerLink='/article/3'>
            <IonImg class='article_image' src='resources/icon.png' alt='Article Connexe 3'></IonImg>
            <IonText slot='end' class='article_text'> Texte Article Connexe 3 </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Article;
