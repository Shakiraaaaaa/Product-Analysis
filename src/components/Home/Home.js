import React, { useEffect, useState } from 'react';
import image from '../image/kit.jpg';
import Friend from '../../Friend/Friend';
import '../Home/Home.css'
import { Link, Route, Routes } from 'react-router-dom';
import Review from '../Review/Review';


const Home = () => {
    const [friends, setFriends] = useState();
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>

            <div className='product'>
                <img src={image} alt="" />
                <div >
                    <h1>Innisfree Green Tea Kit</h1>
                    <p>Buy Innisfree green tea special kit EX set 4pcs online in Bangladesh from Cellsii.com. A perfect set to experience Innisfree best products for more than 10 years. Feel the magic of green tea and be amazed on what it can do to your skin.</p>
                </div>
            </div>
            <div className='friends'>
                {
                    friends?.slice(0, 3)?.map(friend => <Friend key={friend.name} friend={friend} ></Friend>)
                }
            </div>
            <div className="link">
                <Link to={'/review'}>Show all reviews</Link >
            </div>
        </div>
    );
};

export default Home;