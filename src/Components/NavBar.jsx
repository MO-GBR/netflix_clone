import React, {useState, useRef, useEffect} from 'react'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { BsFillBellSlashFill } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useScroll } from '../Hooks/useScroll';
import { NavLink, useNavigate } from "react-router-dom";
import NavDropDown from '../Components/NavDropDown';

const list = ["Home", "TV Showes", "Recently Add", "My List"];

const NavBar = () => {
    const navigate = useNavigate();

    const [{scrollY}] = useScroll();

    const inputRef = useRef(null);

    const [notification, setNotification] = useState(true);
    const [ menu, setMenu ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");

    const toggleBell = () => {
        setNotification(!notification)
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        if (document.activeElement === inputRef.current && inputValue.length === 0) navigate("/");
        if (inputValue.length > 0) navigate(`/search?q=${inputValue}`);
    }, [inputRef, inputValue]);
  return (
    <nav className={`navbarContainer ${scrollY > 50 ? "blackColor" : ""}`}>
        <ul className='navbarUl'>
            <NavLink to="/">
                <img src='logo.png' className='navbarLogo' alt='logo' />
            </NavLink>
            <IoIosArrowDropdown className = "dropdown" />
            {
                list.map((item, index) => (
                    <div key={index} className='navLink'>{item}</div>
                ))
            }
            <div className='navSearch'>
                <AiOutlineSearch className='navSearch_mark'/>
                <input
                    className='navSearch_input' 
                    type='text'
                    placeholder='Title, genres, people'
                    ref={inputRef}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>
            <div className='navLink'>KIDS</div>
            <div className='navLink'>DVD</div>
            <div className='navIcons'>
                <div className='bell' onClick={() => toggleBell()}>
                    {
                        notification
                        ? <AiOutlineBell className='mark' />
                        : <BsFillBellSlashFill className='mark' />
                    }
                </div>
                { menu && (<NavDropDown className = "dropdown" />) }
                <div className='menu' onClick={() => toggleMenu()}>
                    <IoIosArrowDropdown className='mark' />
                </div>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar