import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function AuthNavigation() {

    return (
        <>
            <NavLink className={styles.navlink} to={`/register`}>register</NavLink>
            <NavLink className={styles.navlink} to={`/login`}>log in</NavLink>
        </>
    )
};

export default AuthNavigation;