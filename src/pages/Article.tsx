import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Article.css';

const Article: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Titre Article</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Article;
