import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from '@material-ui/core/IconButton';
import "./SwipeButton.css";

const SwipeButton = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon className="swipeButtons__replay" fontSize="large"/>
            </IconButton>
            <IconButton>
            <CloseIcon fontSize="large" className="swipeButtons__close"/></IconButton>
            <IconButton>
            <StarRateIcon fontSize="large" className="swipeButtons__star"/></IconButton>
            <IconButton>
            <FavouriteIcon fontSize="large" className="swipeButtons__favorite"/></IconButton>
            <IconButton>
            <FlashOnIcon fontSize="large" className="swipeButtons__flash"/></IconButton>
        </div>
    )
}

export default SwipeButton
