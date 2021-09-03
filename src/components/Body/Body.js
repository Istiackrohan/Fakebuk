import React from 'react';
import './Body.css';

const Body = (props) => {
    const {name, image, email, phone, income} = props.userData;
    const ImageDivStyle = {
        width: '20%',
        padding: '10px'
    }
    const imageStyle = {
        width: "200px"
    }
    const Image = () => {
        return (
            <div style={ImageDivStyle}>
                <h4>{name}</h4>
                <img style={imageStyle} src={image}/>
            </div>
        );
    };

    const DetailsStyle = {
        width: '80%',
    };
    const Details = () => {
        return (
            <div style={DetailsStyle}>
                <h2>Name: Hazrat {name}</h2>
                <p>Phone Number: {phone}</p>
                <p>Email: {email}</p>
                <p>Earning: {income}</p>
                <button>Add to friends</button>
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