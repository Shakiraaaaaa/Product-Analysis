import React from 'react';
import image from '../image/notfound.jpg';


const Notfound = () => {
    return (
        <div>
            <h1>The page you are looking for is not found</h1>
            <img src={image} alt="" />

        </div>
    );
};

export default Notfound;