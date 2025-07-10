import { IonContent, IonPage, IonText, IonItem,IonInput, IonList, IonButton } from '@ionic/react';
import './Page.css';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Login</IonText>
        <IonList>
          <IonItem>
            <IonInput label="Nom d'utilisateur" labelPlacement="stacked" placeholder="Ecrivez votre nom d'utilisateur"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Mot de passe" labelPlacement="stacked" placeholder='Ecrivez votre mot de passe'></IonInput>
          </IonItem>
        </IonList>
        {
          // TODO, GERER L'AUTHENTIFICATION ET CHANGER LA ROUTE CI-DESSOUS
        }
        <IonButton routerLink='kit/kit_disponible'>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
