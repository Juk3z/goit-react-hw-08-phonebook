import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedIn } from "redux/authorization/authorization-selectors";

import AuthNavigation from "Components/AuthNavigation";
import Profile from "Components/Profile";

import styles from "./styles.module.css";

function AppBar() {
    const isLogged = useSelector(getLoggedIn);

    return (
        <nav>

            <NavLink className={styles.navlink} to='/'>home</NavLink>
            {isLogged && <NavLink className={styles.navlink} to={`/contacts`}>contacts</NavLink>}
            
            {isLogged
                ?
                <Profile />
                :
                <AuthNavigation
            />}
        </nav>    
    )
};

export default AppBar;