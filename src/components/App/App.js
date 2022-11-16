import styles from './App.module.scss';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../../Routes/Routes";


const App = () => {

    // const load = async () => {
    //     const username = 'dev_1';
    //     const password = 'AggC21223';
    //     const token = btoa(`${username}:${password}`);
    //
    //     const response = await fetch(
    //         'http://68.183.74.14:4005/api/users/current/',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Basic ${token}`,
    //             },
    //             data: {
    //                 username: 'test', email: 'qwerty@gmail.com', password: 'qwerty'
    //             },
    //         },
    //     );
    //
    //     const data = await response.json();
    //     console.log(data);
    // };
    //
    // load()



    // const send = () => {
    //     const user = 'dev_1';
    //     const password = 'AggC21223';
    //     const token = btoa(`${user}:${password}`);
    //     axios({
    //         method: 'POST',
    //         url: 'http://68.183.74.14:4005/api/users/',
    //         data: {
    //             username: '01user01', email: 'main@gmail.com', password: 'main'
    //         },
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Basic ${token}`,
    //         },
    //     })
    //         .then(response => console.log(response.data))
    //         .catch(error => console.log(error.response.data.username.join()))
    // }
    //
    // send()




    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://68.183.74.14:4005/api/users/current/');
    //             const data = await response.json();
    //             console.log(data)
    //             // setQuadcopter(data.quadcopter);
    //         } catch (e) {
    //             console.error('error fetching data from server')
    //         }
    //     }
    //     fetchData();
    // }, []);O

    return (
        <section className={styles.wrapper}>
            <Router>
                <AppRoutes/>
            </Router>
        </section>
    );
}

export default App;