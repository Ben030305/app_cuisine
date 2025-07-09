import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Login</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
