import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logout} from "../../assets/sign-out-alt.svg";


const Header = ({isLoadedIn, setIsLoggedIn, userName, setUserName}) => {

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userName', '');
        setIsLoggedIn(false);
        setUserName('');
    }

    return (
        <header>
            {
                isLoadedIn &&
                <nav className={styles.list}>
                    Welcome, &nbsp; <strong>{userName}</strong>
                    <NavLink
                        className={styles.logout}
                        onClick={handleLogOut}
                        to="/">&nbsp; Logout
                        <Logout/>
                    </NavLink>
                </nav>
            }
        </header>
    )
};

export default Header