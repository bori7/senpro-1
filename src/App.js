import React, {useEffect}  from "react";
// import {MenuLayout } from './component/menu';
import {Footer } from './component/footer';
import {MyContextProvider} from './store/context/myContext';

import {Header} from './component/header';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import {ForumContextProvider} from '../src/store/context/forumContext';
import {ResContextProvider} from '../src/store/context/resultContext';
import CookieConsent, { Cookies } from "react-cookie-consent";

const tawkTo = require("tawkto-react");

const tawkToPropertyId = '601dbb9ba9a34e36b9744df5/1etq29mrv'

const App = () => {

  useEffect(() => {
    tawkTo(tawkToPropertyId)
}, [])

  return (
    
    <Router>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    <MyContextProvider>
    <Header/>
    <ForumContextProvider>

    <ResContextProvider>
    <BaseRouter />
    </ResContextProvider>
    
    </ForumContextProvider>
     <Footer/>
     </MyContextProvider>
    </Router>
  );
}

export default React.memo(App);
