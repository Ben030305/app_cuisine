import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar,IonItem,IonInput, IonList } from '@ionic/react';
import './Page.css';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Login</IonText>
          <IonList className='list'>
            <IonItem>
              <IonInput label="Nom d'utilisateur" labelPlacement="stacked" placeholder="Ecrivez votre nom d'utilisateur"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Mot de passe" labelPlacement="stacked" placeholder='Ecrivez votre mot de passe'></IonInput>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
