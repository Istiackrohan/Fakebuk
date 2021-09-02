import React from 'react';
import './Body.css';
import Users from '../Data/data.json'
import { useState, useEffect } from 'react';

const Body = () => {
    const ImageStyle = {
        width: '20%',
    }

    const Image = () => {
        const [users, setUsers] = useState([]);
        useEffect(() => {
            setUsers(Users);
            console.log(users.name);
        }, []);

        return (
            <div style={ImageStyle}>
                <h1>Image</h1>
                <img src="" />
            </div>
        );
    };

    const DetailsStyle = {
        width: '80%',
    };
    
    const Details = () => {
        return (
            <div style={DetailsStyle}>
                <h1 >Details</h1>
            </div>
        )
    }

    return (
        <div className="users">
            <Image />
            <Details />
        </div>
    );
};

export default Body;