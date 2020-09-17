import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBackIos';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = ({backButton}) => {
    const history = useHistory();
    return(
        <header className="header">
            {backButton ? (<IconButton onClick={() => history.replace(backButton)}>
                <BackButton className="header__icon" fontSize="large"/>
            </IconButton>):(<IconButton >
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>)}
            
            <Link to="/">
            <img className="header__img" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder icon"/>
            </Link>
            <Link to="/chat">
            <IconButton >
                <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </header>
    )
}

export default Header;
