"use client";
import React from "react";
import styled from "styled-components";

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

const Headingreset = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
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

const ResetPassword = () => {
  return (
    <MAIN>
      <CONTAINER>
        <Headingreset>Reset Password</Headingreset>

        <StyledInputName htmlFor="new-password">New Password:</StyledInputName>
        <StyledInput
          id="new-password"
          type="password"
          placeholder="Type your new password"
        />

        <StyledInputName htmlFor="confirm-password">
          Confirm Password:
        </StyledInputName>
        <StyledInput
          id="confirm-password"
          type="password"
          placeholder="Confirm your new password"
        />

        <Button>Reset Password</Button>

        <BackLink href="/login">Back to Sign In</BackLink>
      </CONTAINER>
    </MAIN>
  );
};

export default ResetPassword;
