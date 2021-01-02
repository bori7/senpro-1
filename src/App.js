// import  './static/style.css';
// import {MenuLayout } from './component/menu';
import {Footer } from './component/footer';
import {MyContextProvider} from './store/context/myContext';

import {Header} from './component/header';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import {ForumContextProvider} from '../src/store/context/forumContext';
import {ResContextProvider} from '../src/store/context/resultContext'

const App = () => {
  return (
    <Router>
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

export default App;
