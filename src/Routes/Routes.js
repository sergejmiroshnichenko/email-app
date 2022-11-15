import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import EmailPage from "../pages/EmailPage/EmailPage";
import HomePage from "../pages/HomePage/HomePage";


const AppRoutes = () => {

    const [isLoadedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));
    const [userPassword, setUserPassword] = useState(localStorage.getItem('userPassword'));

    return (

        <Routes>
            <Route path="/"
                   element={<HomePage setIsLoggedIn={setIsLoggedIn}
                                      setUserEmail={setUserEmail}
                                      isLoadedIn={isLoadedIn}
                                      setUserPassword={setUserPassword}
                                      setUserName={setUserName}/>}
            />
            <Route path="/email"
                   element={<EmailPage isLoadedIn={isLoadedIn}
                                       setIsLoggedIn={setIsLoggedIn}
                                       userEmail={userEmail}
                                       setUserEmail={setUserEmail}
                                       userName={userName}
                                       setUserPassword={setUserPassword}
                                       setUserName={setUserName}/>}
            />
        </Routes>

    )
}

export default AppRoutes;