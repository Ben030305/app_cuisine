import { IonContent, IonPage, IonText, IonItem,IonInput, IonList, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Page.css';
import './Login.css';

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
        <IonText class='titre'>Accéder au kit</IonText>
        <div className='contenu'>
          <IonList class='liste_login'>
            <IonItem>
              <IonInput label="Prénom" labelPlacement="stacked" placeholder="Saisissez votre prénom" value={data.firstname} onInput={(e) => setData({...data, firstname: (e.target as HTMLIonInputElement).value as string})}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Email" labelPlacement="stacked" placeholder="Saisissez votre email" value={data.email} onInput={(e) => setData({...data, email: (e.target as HTMLIonInputElement).value as string})}></IonInput>
            </IonItem>
          </IonList>
          <div className='bouton_centre'>
            <IonButton onClick={handleConnect}>Se connecter au site</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
