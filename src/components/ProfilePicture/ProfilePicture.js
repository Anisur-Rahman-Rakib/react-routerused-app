import React, { useState, useEffect } from 'react';

const ProfilePicture = () => {
    const [picture , setPicture]= useState('');
    useEffect(() => {
   fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data => setPicture(data.results[0].picture.large))
    },[])
    return (
        <div>
            <img  src={picture} alt=""/>
        </div>
    );
};

export default ProfilePicture;