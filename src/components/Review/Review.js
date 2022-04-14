import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';
import '../Review/Review.css'

const Review = () => {
    const [friends, setFriends] = useState();
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (

        <div >
            <h1>Reviews</h1>

            <div>
                <div className='friends'>
                    {
                        friends?.map(friend => <Friend key={friend.name} friend={friend} ></Friend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;