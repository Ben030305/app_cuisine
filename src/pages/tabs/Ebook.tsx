import { IonCol, IonContent, IonGrid, IonImg, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import './../Page.css';
import './Ebook.css';
import { listeLivres } from '../../ConstructeurLivre';
import { useState } from 'react';


const Ebook: React.FC = () => {

  const nbColumns = 2;

  const [tri, setTri] = useState("0");
  const [livres, setLivres] = useState(listeLivres)

  function createMatrix(liste: Array<any>, n: number){
    const nbLignes = Math.ceil(n/nbColumns);
    const matLivres = [];
    let index = 0;
    for (let i = 0; i < nbLignes; i++){
      const liste_temp = [];
      for (let j = 0; j < nbColumns && index < n; j++){
        liste_temp.push(liste[index]);
        index++;
      }
      matLivres.push(liste_temp);
    }
    return matLivres;
  }

  function sortLivres(triValue: String, liste: Array<any>){

    switch(triValue){
      case "0":
        console.log("Défaut");
        return [...liste].sort((a, b) => {
          const nameA = a.titre.toUpperCase(); 
          const nameB = b.titre.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
        break;
      case "1":
        console.log("Croissant")
        return [...liste].sort((a, b) => a.tarif - b.tarif);
        break;
      case "2":
        console.log("Decroissant")
        return [...liste].sort((a, b) => b.tarif - a.tarif);
        break;
      default:
        console.log("Il se passe rien")
        return [...liste];
    }
  }


  function loadBooks(){
    const matLivres = createMatrix(livres,listeLivres.length);
    return(
      <IonList>
        <IonGrid fixed={true}>
          {matLivres.map((listeLivre,index) => (
          <IonRow class="ion-justify-content-around" key={index}>
            {listeLivre.map((livre) => (
              <IonCol size="1" key={livre.titre}>
                <IonRouterLink routerLink={livre.route} color={'dark'}>
                  <IonImg className="image_ebook" src={livre.image}></IonImg>
                  <IonText class='text_ebook'>{livre.titre} - <span className='prix_livre'>{livre.tarif}€</span></IonText>
                </IonRouterLink>
              </IonCol>
            ) 
            )}
          </IonRow>    
          ))}
        </IonGrid>
      </IonList>
      
    )

  }
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Ebook</IonText>
        <div className='contenu'>
          <IonList class='marge_ebook'>
            <IonToolbar class='toolbar'>
              <IonItem>
              <IonSelect aria-label="Filtre" interface="popover" placeholder="Tri" value={tri} onIonChange={(e) => {
                setTri(e.detail.value);
                const sortedLivres = sortLivres(e.detail.value,listeLivres);
                setLivres(sortedLivres);
                console.log(sortedLivres);
              }}>
                <IonSelectOption value="0">Par défaut</IonSelectOption>
                <IonSelectOption value="1">Par prix croissant</IonSelectOption>
                <IonSelectOption value="2">Par prix décroissant</IonSelectOption>
              </IonSelect>
              </IonItem>
            </IonToolbar>
          </IonList>
          {loadBooks()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ebook;
