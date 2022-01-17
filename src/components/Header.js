import React from 'react';
import NavTabs from './NavTabs';
import bannerImg from "../assets/top-banner-1.jpg";

// Object destructuring assignment to pluck off our variables from the props object
function Header({ currentPage, handlePageChange }) {
    return (
        <div className='header'>
            <img className='banner img-fluid' src={bannerImg} />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default Header;
