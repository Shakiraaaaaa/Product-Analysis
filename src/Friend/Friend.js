import React from 'react';
import '../Friend/Friend.css'


const Friend = (props) => {
    const { name, comment, ratings } = props.friend;
    return (
        <div className='friend'>
            <h1>Customers</h1>
            <h1>Name : {name}</h1>
            <h2>Comment : {comment}</h2>
            <h3>Ratings : {ratings}</h3>

        </div>
    );
};

export default Friend;