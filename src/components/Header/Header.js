import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import '../Header/Header.css'


const Header = () => {
    return (
        <div >

            <div className='nav'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>





        </div>
    );
};

export default Header;