import { signOut } from 'firebase/auth'
import React from 'react'
import { logoutAuth } from '../Redux/Reducers/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Request/firebase'

const NavDropDown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.user);

    const logUserOut = () => {
        dispatch(logoutAuth());
        signOut(auth).then(() => navigate("/login"));
    };
    console.log(currentUser)
  return (
    <div className='dropdownContainer'>
        <div>
            <div className='dropdownContent'>
                <div className='dropdownContent-currentUser'>
                    <img className='dropdownContent-currentUser-img' src={currentUser.photo} />
                    <div className='dropdownContent-info'>
                        <h3 className='dropdownContent-currentUser-text'>{`Hi, ${currentUser.username}`}</h3>
                        <p className='dropdownContent-currentUser-text2'>{currentUser.email}</p>
                    </div>
                </div>
                <div>
                    <div className='dropdownContent-user'></div>
                    <p className="dropdownContent-user-text">Andres</p>
                </div>
                <div>
                    <div className="dropdownContent-user dropdownContent-user-2"></div>
                    <p className="dropdownContent-user-text">Tony</p>
                </div>
                <div>
                    <div className="dropdownContent-user dropdownContent-user-3"></div>
                    <p className="dropdownContent-user-text">Luis</p>
                </div>
                <p className="dropdownContent-text">Mange Profile</p>
            </div>
            <div className="dropdownContent dropdownContent-2">
                <p className="dropdownContent-textOutside">{currentUser.loggedAt}</p>
                <p className="dropdownContent-textOutside">Account</p>
                <p className="dropdownContent-textOutside">Help Center</p>
                <p className="dropdownContent-textOutside" onClick={logUserOut}>Sign out</p>
            </div>
        </div>
    </div>
  )
}

export default NavDropDown