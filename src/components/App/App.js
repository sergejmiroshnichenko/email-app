// import styles from './App.module.scss';
import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../../Routes/Routes";
import Header from "../Header/Header";


const App = () => {

  const [isLoadedIn, setIsLoggedIn] = useState( localStorage.getItem('isLoggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  return (
      <Router>
        <Header isLoadedIn={isLoadedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName}/>
        <AppRoutes setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>
      </Router>
  );
}

export default App;