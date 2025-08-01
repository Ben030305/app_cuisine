import { IonContent, IonPage, IonText } from '@ionic/react';
import './Page.css';

const ConditionsVente: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Conditions Générales de Vente</IonText>
        <div className='contenu'>
          <IonText>
            {cgv}
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ConditionsVente;

const cgv = <div className="post-content">
        <p></p>
        <h2 className='sous_titre'><strong>Article 1 : Champ d’application</strong></h2>
        <p>Les présentes conditions générales de vente s’appliquent à toutes les transactions conclues par le biais du site Internet cuisinedebase.com.<br></br>Est considérée comme « client » toute personne physique ou morale réalisant une commande validée via notre plateforme de paiement sécurisée.</p>
        <h2 className='sous_titre'><strong>Article 2 : Commande</strong></h2>
        <p>Toute commande passée sur le site implique l’acceptation intégrale des présentes conditions générales de vente.</p>
        <h2 className='sous_titre'><strong>Article 3 : Prix</strong></h2>
        <p>Les prix sont indiqués en euros toutes taxes comprises (TVA non applicable).<br></br>Le prix des articles peut être modifié à tout moment, mais le tarif appliqué à une commande est toujours celui annoncé au moment de la commande.</p>
        <h2 className='sous_titre'><strong>Article 4 : Paiement</strong></h2>
        <p>Le paiement est requis au moment de la commande, y compris pour les produits en précommande.<br></br>Vous avez le choix d’effectuer le règlement par carte bancaire ou par PayPal. Le paiement sécurisé en ligne par carte bancaire est réalisé par l’intermédiaire de la société Stripe.<br></br>Les informations transmises sont chiffrées par un logiciel dans les règles de l’art et ne peuvent être lues au cours du transport sur le réseau. Toute garantie quant à la sécurité de ce système est entièrement de la responsabilité de Stripe et PayPal, qui ont fait leurs preuves et prennent en charge des millions de paiements sécurisés tous les jours.</p>
        <h2 className='sous_titre'><strong>Article 5 : Accès et livraison</strong></h2>
        <p>L’accès aux produits numériques se fera par lien téléchargeable. Vous pourrez y accéder à tout moment et consulter votre formation dans le cloud, comme vous le feriez sur Netflix.<br></br>Immédiatement après avoir effectué votre commande, vous recevrez un mail avec les détails de la commande. Nous vous demandons de les conserver de manière privée afin de pouvoir accéder plus facilement à vos commandes actuelles et futures.<br></br>En cas de difficulté pour accéder à votre commande, contactez le support par mail à l’adresse <a href="mailto:support@cuisinedebase.com">support@cuisinedebase.com</a>.</p>
        <h2 className='sous_titre'><strong>Article 6 : Droit d’auteur</strong></h2>
        <p>Tous les éléments du site et des produits sont et restent la propriété intellectuelle et exclusive de la société.</p>
        <p>Nul n’est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu’ils soient logiciels, visuels ou sonores ou à communiquer les produits téléchargés à un tiers.</p>
        <h2 className='sous_titre'><strong>Article 7 : Conditions de remboursement</strong></h2>
        <p>La garantie de remboursement dépend de ce qui est mentionné sur la page qui présente le produit.</p>
        <p>Si aucune garantie de remboursement n’est mentionnée sur la page qui présente le produit, aucun remboursement ne sera effectué après la commande.</p>
        <p>Nous croyons très fort que notre contenu a de la valeur et qu’il faut être prêt à investir sur soi-même pour avoir des résultats ambitieux.</p>
        <p>Nous ne voulons pas pénaliser les élèves sérieux au profit de certains qui utiliseraient la garantie pour accéder au contenu gratuitement…</p>
        <p>À titre d’information<br></br>Accéder au contenu (en le téléchargeant ou en le visionnant même partiellement) est considéré comme l’exécution pleine et entière du contrat et entraîne donc une renonciation du délais de rétractation.</p>
        <p>En effet, la règlementation exclut le « contenu numérique fourni sur un support immatériel et contrat d’abonnement à ces prestations dont l’exécution a commencé avec votre accord et pour lequel vous avez renoncé à votre droit de rétractation (exemple : un film téléchargé) ».</p>
        <p>Autrement dit : nous n’avons aucune obligation légale d’effectuer un remboursement sur simple demande.</p>
        <p>Si toutefois, une garantie de remboursement est mentionnée sur la page qui présente le produit, contactez le support client à <a href="mailto:support@cuisinedebase.com">support@cuisinedebase.com</a> pour demander son application.</p>
        <h2 className='sous_titre'><strong>Article 8 : Protection des données personnelles</strong></h2>
        <p>Nous n’aimons pas fouiller dans la vie de nos clients. Les seules informations qui nous intéressent, ce sont celles que nos clients nous envoient d’eux-même.</p>
        <p>Conformément à la Loi Informatique et Libertés du 6 janvier 1978, vous disposez d’un droit d’accès et de rectification aux données personnelles vous concernant. En adhérant à ces conditions générales de vente, vous reconnaissez avoir pris connaissance de notre politique de protection des données personnelles.</p>
        <p>En saisissant votre adresse email sur l’un des sites de notre réseau, vous recevrez des emails contenant des informations et/ou des offres promotionnelles concernant des produits édités par notre société.</p>
        <p>Nous ne voulons pas envoyer des emails à des gens qui ne veulent pas en recevoir.</p>
        <p>Ainsi, vous pouvez vous désinscrire à tout instant. Il vous suffit pour cela de cliquer sur le lien présent à la fin de nos emails. Ce lien est précédé de la mention “Se désabonner”, ou « Unsubscribe ».</p>
        <h2 className='sous_titre'><strong>Article 9 : Limitation d’âge</strong></h2>
        <p>Des limitations d’âge s’appliquent : Notre société n’accepte que des clients de plus de 16 ans (pour les produits physiques et numériques) et de plus de 18 ans (pour les services : coaching, ateliers, séminaires).<br></br>Nous faisons de notre mieux pour restreindre l’accès à nos sites, produits et services aux mineurs. Même si le contenu de nos produits et services n’est pas de nature choquante et peut aider tout un chacun, nous préférons nous adresser à un public mature et capable d’appréhender les implications et les responsabilités du monde de l’entreprise.</p>
        <h2 className='sous_titre'><strong>Article 10 : Informations sur la société</strong></h2>
        <p>N° Siret : 845 374 594 00016<br></br>
        Adresse : 8 Rue Louis Beaunier<br></br>
        77000 Melun<br></br>
        France<br></br>
        Mail : <a href="mailto:contact@cuisinedebase.com">contact@cuisinedebase.com</a></p>
    </div>