import React from "react";
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0,0,0,);

`;

const SubmitForm =styled.p`
font-size:24px;


`

const SubmitGet=styled.button`
font-size:16px;
background-color: beige;
`

const FormField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: beige;

`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: beige;

`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const BookingForm = () => {
  const handleSubmit =(e)=>{
    e.preventDefault();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <SubmitForm>Submit Form</SubmitForm>
      <SubmitGet>Get Best Price</SubmitGet>

      <Label htmlFor="occasion">What's the occasion?</Label>
      <select id="occasion">
        <option value=" ">Select Type</option>
        <option value="wedding">Wedding</option>
        <option value="corporate-event">Corporate-event</option>
        <option value="birthday-party">Birthday Party</option>
        <option value="video-shootout">Video Shootout</option>
        <option value="charity">Charity</option>
        <option value="inauguration">Inauguration</option>
        <option value="concert-festival">Concert/festival</option>
        <option value="exhibitions">Exhibitions</option>
        <option value="kids-party">Kids party</option>
      </select>

      <Label htmlFor="date">Date</Label>
      <FormField type="date" id="date" />

      <Label htmlFor="venue">Venue Address</Label>
      <FormField type="text" id="venue" placeholder="Venue Address" />

      <Label htmlFor="budget">Budget</Label>
      <FormField type="text" id="budget" placeholder="Budget" />

      <Label htmlFor="attendees">How many people will attend</Label>
      <FormField type="text" id="attendees" placeholder="Number of Attendees" />

      <Label htmlFor="name">Full Name</Label>
      <FormField type="text" id="name" placeholder="Full Name" />

      <Label htmlFor="email">Email Address (No Spam!)</Label>
      <FormField type="text" id="email" placeholder="Email Address" />

      <div>
        <Label htmlFor="country-code">Country Code</Label>
        <select id="country-code" name="country-code" required>
          <option value="+91">+91 (India)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+1">+1 (USA)</option>
        </select>
        <Label htmlFor="phone">Phone Number</Label>
        <FormField type="tel" id="phone" placeholder="Phone Number" />
      </div>

      <Label htmlFor="more-info"></Label>
      <TextArea id="more-info" placeholder="Tell us more" rows="4"/>

        
<SubmitButton>Show Best Price</SubmitButton>
<div>
<label>
  <input type="checkbox" />
  Send more options in my budget
</label>
<label>
  <input type="checkbox" />
  Send Quotes on Whatsapp
</label>
</div>
</FormContainer>
  );
}
