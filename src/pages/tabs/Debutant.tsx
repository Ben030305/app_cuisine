import { IonButton, IonContent, IonImg, IonPage, IonRouterLink, IonText } from '@ionic/react';
import './../Page.css'
import './Debutant.css';

const Debutant: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Débutant, commencez ici</IonText>
        <div className='contenu'>
          <IonImg class='post-image' src='https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/02/Cuisine2.jpg?w=1024&ssl=1' alt='icônes de cuisine'></IonImg>
          <IonText class='corps_debutant'>
            <p>
              Si vous êtes <b>débutant en cuisine</b>, que vous ayez déjà suivi des cours ou non, bienvenue !
              Pour commencer, consultez ces quelques articles qui vous expliqueront <b>comment apprendre les techniques de base en cuisine</b>.
              <ul>
                <li>
                  La définition du <b>CAP cuisine</b>
                </li>
                <li>
                  Les procédures pour effectuer une inscription en tant que <b>candidat libre</b>;
                </li>
                <li>
                  Le déroulement des <b>épreuves pratiques</b> et <b>écrites</b> ;
                </li>
                <li>
                  Quoi faire après avoir obtenu <b>le diplôme</b> ;
                </li>
                <li>
                  Les <b>techniques de base</b> et comment faire pour les <b>apprendre</b>.
                </li>
              </ul>
            </p>

            {
              // TODO : changer la route des router link pour rediriger vers les articles correspondants 
            }
            <h1 className='sous_titre'>Le kit du débutant en cuisine</h1>
            <p>
              Afin de bien débuter, consultez ces différents articles dédiés à la préparation du CAP Cuisine :
              <ul>
                <li>
                  <IonRouterLink routerLink='/article/comment-devenir-un-cuisinier-professionnel'>
                    Etape 0 : Comment apprendre à cuisiner ou devenir cuisinier professionnel
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/comment-passer-son-cap-cuisine-en-candidat-libre'>
                    Etape 1 : Procédure d’inscription au CAP cuisine en candidat libre
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/comment-sorganiser-pour-bien-prparer-le-cap-cuisine-candidat-libre'>
                    Etape 2 : Comment s’organiser pour bien préparer le CAP cuisine candidat libre
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/materiels-du-cuisinier-coutellerie-mallette-de-cuisine'>
                    Etape 3 : Matériels du cuisinier, coutellerie, mallette de cuisine
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine'>
                    Etape 4 : Les 25 recettes à maîtriser pour obtenir son CAP cuisine
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/livre-avoir-pour-apprendre-les-bases-de-la-cuisine-cap-cuisine'>
                    Etape 5 : 6 Livres pour apprendre les bases de la cuisine (CAP cuisine)
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/decryptage-de-epreuve-pratique-du-cap-cuisine'>
                    Etape 6 : Décryptage de l’épreuve pratique du CAP cuisine
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/epreuve-cap-cuisine-2021-les-sujets-de-lexamen-pratique'>
                    Etape 6 bis : Les sujets de l’épreuve pratiques EP2 de la session 2021
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/decryptage-des-epreuves-ecrites-du-cap-cuisine'>
                    Etape 7 : Décryptage des épreuves écrites du CAP cuisine
                  </IonRouterLink>
                </li>
                <li>
                  <IonRouterLink routerLink='/article/cap-cuisine-session-2019-le-point-sur-les-examens-pratiques-en-3-questions'>
                    Etape 8 : CAP cuisine Session 2019. Le point sur les examens pratiques en 3 questions
                  </IonRouterLink>
                </li>
              </ul>
              Ensuite, allez voir le menu <b>article</b> pour dénicher les articles qui vous intéressent, ou consultez simplement les derniers articles publiés dans l'<b>Accueil</b>. Pour rejoindre l'<b>Accueil</b>, vous pouvez cliquer sur le logo en haut de l'écran. Bonne lecture !
            </p>
            <p>
              En complément, vous êtes libre de recevoir gratuitement mon livre numérique « Le kit du candidat libre au CAP cuisine »  qui partage :
              <ul>
                <li>
                  <b>Comment effectuer l’inscription en candidat libre,</b>
                </li>
                <li>
                  <b>Le déroulement des épreuves pratiques et théoriques,</b>
                </li>
                <li>
                  <b>La liste des techniques et recettes pour se préparer à l’examen. </b>
                </li>
              </ul>
            </p>
            <br></br>
          </IonText>
          <div className='bouton_centre'>
            <IonButton routerLink='/kit'>Cliquez ici pour obtenir gratuitement le livre</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Debutant;
