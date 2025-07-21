import { IonContent, IonPage, IonText, IonItem,IonInput, IonList, IonButton, IonHeader } from '@ionic/react';
import './Page.css';
import './Login.css';
import { useState } from 'react';

const Login: React.FC = () => {

  let url='';

  const [data, setData] = useState({
    firstname: '',
    email: ''
  });

  function handleConnect() {
    url=`https://hyoussef.activehosted.com/f/5?firstname=${data.firstname}&email=${data.email}`
    window.location.href = url;
  }

  return (
    <IonPage className='format'>
      <IonContent fullscreen>
        <IonText class='titre'>Login</IonText>
        <div className='contenu'>
          <IonList class='liste_login'>
            <IonItem>
              <IonInput label="Prénom" labelPlacement="stacked" placeholder="Saisissez votre prénom" value={data.firstname} onIonChange={(e) => setData({...data, firstname: (e.target as HTMLIonInputElement).value as string})}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Email" labelPlacement="stacked" placeholder="Saisissez votre email" value={data.email} onIonChange={(e) => setData({...data, email: (e.target as HTMLIonInputElement).value as string})}></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={handleConnect}>Se connecter</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
