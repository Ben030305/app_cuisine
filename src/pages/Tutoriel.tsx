import { IonContent, IonPage, IonText } from '@ionic/react';
import './Page.css';
import './Tutoriel.css';

const Tutoriel: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Tutoriel</IonText>
        <div className='contenu'>
          <IonText>
            <p>Bienvenue sur l'application Cuisine de base ! Comme c'est la 1ère fois que vous vous connectez à l'application, voici un rapide tutoriel pour apprendre à l'utiliser simplement.</p>
            <p>Lors du lancement de l'application, vous vous trouverez sur la page d'accueil. C'est ici que vous trouverez les derniers articles parus ou mis en avant. Sur chaque page se trouvera en bas de l'écran 5 boutons :</p>
            <ul>
              <li>dans <b>Débutant</b>, vous aurez accès à une sélection d'articles et de ressources vous permettant d'apprendre sereinement et simplement les bases de la cuisine !</li>
              <li>dans <b>Ebook</b>, vous trouverez ma sélection de livres numériques permettant de se préparer au mieux aux épreuves du CAP cuisine,</li>
              <li>dans <b>Explorer</b>, vous pourrez naviguer parmi tous les articles disponibles sur l'application afin de vous renseigner sur le sujet de votre choix,</li>
              <li>dans <b>Coaching</b>, vous aurez la possibilité d'obtenir un appel avec moi pour que je vous aide à obtenir votre CAP cuisine,</li>
              <li>dans <b>Kit</b>, vous serez en mesure de télécharger <b>gratuitement</b> mon kit candidat libre pour le CAP cuisine !</li>
            </ul>
            <p>Si vous souhaitez en apprendre plus sur moi ou consulter à nouveau le tutoriel, rendez-vous dans la page d'accueil (disponible en cliquant sur le titre en haut de l'écran), puis dans <b>À Propos</b> !</p> 
            <p>Bon travail !</p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tutoriel;
