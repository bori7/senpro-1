import React  from "react";
// import {MenuLayout } from './component/menu';
import {Footer } from './component/footer';
import {MyContextProvider} from './store/context/myContext';

import {Header} from './component/header';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import {ForumContextProvider} from '../src/store/context/forumContext';
import {ResContextProvider} from '../src/store/context/resultContext';
import CookieConsent, { Cookies } from "react-cookie-consent";

const App = () => {
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
