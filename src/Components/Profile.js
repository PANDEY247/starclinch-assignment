import React from 'react';
import {Link } from 'react-router-dom';

import styled from 'styled-components';

const ProfileContainer =styled.div`
h1{
  margin-top: 20px ;
}
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

`
const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0062cc;
  }
`;

const CardGallery=styled.button`
img {
  width:600px;
}`;


export const Profile = () => {
  
  return (
    <>
    <ProfileContainer>
      <div className="top">
        <img src="https://wpcdn.starclinch.in/2019/03/26623.jpg" alt="artist " width="300" height="420"></img>
      </div>
      <h1>Ranbir Kapoor</h1>
      <h2>(CELEBRITY APPEARANCE)</h2>
      <p>The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer</p>
      <Link to="/BookingForm">
        <Button>See Price and Book</Button>
      </Link>
    </ProfileContainer>
    <CardGallery>
    <div>
        <img
          src={
            "https://wpcdn.starclinch.in/2019/03/26642.jpg"
          }
        />
      </div>
      <div>
        <img
          src={"https://wpcdn.starclinch.in/2019/03/26632.jpg"
          }
        />
      </div>
      <div>
        <img
          src={"https://wpcdn.starclinch.in/2019/03/26641.jpg"
          }
        />
      </div>
      <div>
        <img
          src={"https://wpcdn.starclinch.in/2019/03/26631.jpg"
          }
        />
      </div>
      <div>
        <img
          src={"https://wpcdn.starclinch.in/2019/03/26640.jpg"
          }
        />
      </div>
      <div>
        <img src={"https://wpcdn.starclinch.in/2019/03/26639.jpg"} />
      </div>
      <div>
        <img
          src={
            "https://wpcdn.starclinch.in/2019/03/26627.jpg"
          }
        />
      </div>

    </CardGallery>
    </>
    
  );
};
