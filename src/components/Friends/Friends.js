import React from 'react';
import './Friends.css';

const Friends = (props) => {
    const list = props.friendList;
    const totalIncome = list.reduce((sum, friends) => sum + friends.income, 0)
    return (
        <div className="friend-container">
            <h2>Friends Added: {list.length}</h2>
            <h4>Friends name: {list.map(friend => <li>{friend.name}</li>)}</h4>
            <p>Friends Total Income: ${totalIncome}</p>
        </div>
    );
};

export default Friends;