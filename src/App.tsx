import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookSharp, ellipse, heart, homeSharp, manSharp, peopleCircleSharp, peopleSharp, restaurantSharp, schoolSharp, search, searchCircleOutline, searchSharp, square, star, triangle } from 'ionicons/icons';
import Tab1 from './pages/Debutant';
import Tab2 from './pages/Ebook';
import Tab3 from './pages/Explorer';
import Tab4 from './pages/Coaching';
import Tab5 from './pages/Kit';
import './style.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

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

function handleClickCuisineDeBase() {
  alert("Click detected on Cuisine de base !");
}

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
      <div className='title' >
        <IonImg onClick={handleClickCuisineDeBase} class='title_image' src='resources/icon.png' alt='Cuisine de base'></IonImg> 
        <IonText onClick={handleClickCuisineDeBase} >Cuisine de base</IonText>
      </div>
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
          <Route exact path="/">
            <Redirect to="/debutant" />
            {
              //TODO : changer la redirection par défaut
            }
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        {
          // changer bouton en bas et ajouter route
        }
          <IonTabButton tab="tab1" href="/debutant">
            <IonIcon aria-hidden="true" icon={homeSharp} />
            <IonLabel>Accueil débutant</IonLabel>
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
            <IonLabel>Coaching CAP</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/kit">
            <IonIcon aria-hidden="true" icon={restaurantSharp} />
            <IonLabel>Kit candidat libre</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
