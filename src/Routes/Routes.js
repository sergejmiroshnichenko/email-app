import React from 'react';
import {Routes, Route} from 'react-router-dom';
import EmailPage from "../pages/EmailPage/EmailPage";
import HomePage from "../pages/HomePage/HomePage";


const AppRoutes = ({setIsLoggedIn, setUserName}) => {

    return (
        <Routes>
            <Route path="/"
                   element={<HomePage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>}
            />
            <Route path="/email"
                   element={<EmailPage />}
            />
        </Routes>
    )
}

export default AppRoutes;