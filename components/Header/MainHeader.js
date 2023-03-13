import {useState, useEffect} from 'react';
import HeaderProfile from "./HeaderProfile";
import Header from "./Header";

const MainHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      setIsLoggedIn(window.localStorage.getItem("isLoggedIn"))
    
    }, [])

    const renderHeader = isLoggedIn ? <HeaderProfile /> : <Header />
    
    return (
        renderHeader
    ) 
}

export default MainHeader;
