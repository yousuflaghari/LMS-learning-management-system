"use client";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MAIN = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 30px;
  background-size: cover;
`;

const CONTAINER = styled.div`
  width: 300px;
  padding: 30px;
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Headingforgot = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledInputName = styled.label`
  font-size: 14px;
  display: block;
  margin-top: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 5px;
  font-size: 13px;
  background-color: aliceblue;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  padding: 5px;
  border: none;
  cursor: pointer;
`;

const BackLink = styled.a`
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin-top: 10px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendResetLink = async () => {
    if (email) {
      try {
        const response = await axios.post("YOUR_FAKE_API_URL", { email });

        if (response.data && response.data.password) {
          alert(`Your password is: ${response.data.password}`);
        } else {
          alert("No user found with this email.");
        }
      } catch (error) {
        console.error("Error sending reset link:", error);
        alert("Failed to retrieve password. Please try again.");
      }
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <MAIN>
      <CONTAINER>
        <Headingforgot>Forgot Password</Headingforgot>

        <StyledInputName htmlFor="email">Email Address:</StyledInputName>
        <StyledInput
          id="email"
          type="email"
          placeholder="Type your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleSendResetLink}>Send Reset Link</Button>

        <BackLink href="/login">Back to Sign In</BackLink>
      </CONTAINER>
    </MAIN>
  );
};

export default ForgotPassword;
