import { useSelector, useDispatch } from "react-redux";
import { getUser } from 'redux/authorization/authorization-selectors';

import { logout } from 'redux/authorization/authorization-operations';
    
function Profile() {
    const user = useSelector(getUser);
    const dispatch = useDispatch();

    return (
        <>
            <span>{user.name || 'example' }</span>
            <button onClick={() => dispatch(logout())}>logout</button>
        </>
    )
};

export default Profile;