import { IonContent, IonPage, IonText } from '@ionic/react';
import './Page.css';

const QuiSuisJe: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Qui suis-je</IonText>
        <div className='contenu'>
          <IonText>
            {quiSuisJe}
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QuiSuisJe;


const quiSuisJe = <div className="post-content">
  <div>
    <div>
      <p>Je m’appelle Hicham, J’ai longtemps travaillé en tant qu’ingénieur dans le secteur de l’aéronautique. Mon travail consistait principalement à faire de la modélisation et simulation numérique. Voici quelques exemples d’activités qui rythmaient mon quotidien:</p>



      <ul id="block-6dbfb663-e904-45ff-8972-415fcf33fe6d"><li>dimensionner des pièces d’avion,</li><li>prévoir le comportement mécanique / thermique / acoustique de structures avionique,</li><li>prévoir la durée de vie des pièces,</li><li>… et plusieurs autres activités.</li></ul>



      <div>
        <div>
          <p>Maintenant j’ai tourné cette page pour devenir blogueur dans des domaines qui me passionnent, comme la cuisine, pâtisserie et restauration.</p>



          <p>Grâce au boom que connaît les nouveaux médias et système d’information, le savoir est maintenant à la portée de tout le monde. Il suffit d’être autodidacte et motivé pour apprendre grâce à des formations numériques, qu’elles soient gratuites ou payantes. les amateurs de la cuisine empruntent de plus en plus cette voie pour se perfectionner dans l’art culinaire.</p>



          <p></p>
        </div>



        <div>
          <figure>
            <img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2021/04/hicham-fourneau-cuisine.png" alt="" className="post-image" />
          </figure>
        </div>
      </div>



      <p>Moi même j’ai passé mon CAP cuisine en candidat libre en 2015 à Toulouse. Mon but était de tenter une reconversion professionnelle. En 2018 j’ai décidé de tenter ma chance dans le domaine de la restauration. Je me suis lancé en tant que traiteur chef à domicile. Et pour partager mon expérience et mon savoir avec des personnes qui veulent emprunter le même chemin que moi, j’ai transformé mon <a href="https://amzn.to/31oQ9st">business plan en livre, et je l’ai publié chez Amazon Publishing</a>. Ce livre revient sur les étapes de création d’une activité de traiteur – chef à domicile. Cela pourrait aider les personnes qui veulent se lancer dans l’aventure de l’entrepreneuriat, et particulièrement une activité qui ne nécessite pas beaucoup d’investissements.</p>

    </div>
  </div>


  <strong>
    <p><span>Le but à travers la réalisation de ce blog est d’offrir une plateforme de référence pour apprendre les bases de la cuisine. Le contenu du site est destiné aux personnes qui veulent se professionnaliser dans la cuisine, de passer le CAP cuisine en candidat libre ou tout simplement d’apprendre les bases de la cuisine,&nbsp;</span></p>



    <p><span>Pour vous aider dans votre projet professionnel, je publierai au moins une fois par semaine des contenus qui traitent les sujets suivants:</span></p>



    <ul><li><span>Les différentes taches et qualités d’un cuisinier professionnel.</span></li><li><span>Comment apprendre les bases de la cuisine.</span></li><li><span>Décryptage de quelques affaires entrepreneurial en relation avec la cuisine.</span></li></ul>



    <p><span>Le contenu de ce site s’adresse à des professionnels débutants (élèves en CAP cuisine ou BEP par exemple). Mais les amateurs de la cuisine peuvent largement aborder les thèmes proposés.</span></p>
  </strong>
</div>


