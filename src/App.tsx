import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonRouterLink,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookSharp, homeSharp, restaurantSharp, schoolSharp, searchSharp } from 'ionicons/icons';
import { StatusBar } from '@capacitor/status-bar';
import { buildRoute, listeArticles } from './ConstructeurArticle';
import { buildRouteLivre } from './ConstructeurLivre';
import { Preferences } from '@capacitor/preferences';
import { useState } from 'react';

import Tab1 from './pages/tabs/Debutant';
import Tab2 from './pages/tabs/Ebook';
import Tab3 from './pages/tabs/Explorer';
import Tab4 from './pages/tabs/Coaching';
import Tab5 from './pages/tabs/Kit';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Login from './pages/Login';
import Tutoriel from './pages/Tutoriel';
import QuiSuisJe from './pages/QuiSuisJe';
import Pourquoi from './pages/Pourquoi';
import MentionsLegales from './pages/MentionsLegales';
import ConditionsVente from './pages/ConditionsVente';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Core CSS for the application */
import './style.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
StatusBar.setOverlaysWebView({ overlay: false });

const App: React.FC = () => {

  const [firstScreen, setFirstScreen] = useState("");

  const setHasSeenTutorial = async () => {
    await Preferences.set({
      key: 'tutorial',
      value: 'true',
    });
  };
  
  const checkTutorial = async () => {
    const { value } = await Preferences.get({ key: 'tutorial' });
    if(value != 'true') {
      setFirstScreen("/tutoriel");
      setHasSeenTutorial();
    } else {
      setFirstScreen("/accueil");
    }
  };

  function checkDefaultRoute() {
    checkTutorial();
    return (
      <Redirect to={firstScreen} />
    );
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar class='toolbar_app'>
          <IonRouterLink routerLink='/accueil' color="dark">
            <div className='title'>
              <IonImg class='title_image' src='assets/icon.png' alt='Cuisine de base'></IonImg> 
              <IonText>Cuisine de base</IonText>
            </div>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/debutant">
              <Tab1 />
            </Route>
            <Route exact path="/ebook">
              <Tab2 />
            </Route>
            <Route exact path="/explorer">
              <Tab3 />
            </Route>
            <Route exact path="/coaching">
              <Tab4 />
            </Route>
            <Route exact path="/kit">
              <Tab5 />
            </Route>
            <Route exact path="/accueil">
              <Accueil />
            </Route>
            {[buildRoute(), buildRouteLivre()]}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/a_propos">
              <APropos />
            </Route>
            <Route exact path="/tutoriel">
              <Tutoriel />
            </Route>
            <Route exact path="/">
              {checkDefaultRoute()}            
            </Route>
            <Route exact path="/qui_suis_je">
              <QuiSuisJe />
            </Route>
            <Route exact path="/pourquoi_cuisine_de_base">
              <Pourquoi />
            </Route>
            <Route exact path="/mentions_legales">
              <MentionsLegales />
            </Route>
            <Route exact path="/conditions_generales_de_vente">
              <ConditionsVente />
            </Route>

          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/debutant">
              <IonIcon aria-hidden="true" icon={homeSharp} />
              <IonLabel>Débutant</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/ebook">
              <IonIcon aria-hidden="true" icon={bookSharp} />
              <IonLabel>Ebook</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/explorer">
              <IonIcon aria-hidden="true" icon={searchSharp} />
              <IonLabel>Explorer</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/coaching">
              <IonIcon aria-hidden="true" icon={schoolSharp} />
              <IonLabel>Coaching</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/kit">
              <IonIcon aria-hidden="true" icon={restaurantSharp} />
              <IonLabel>Kit CAP</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
