"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slice/loginslice";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const Form = styled.div`
  width: 300px;
  padding: 30px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

const Loader = styled.div`
  text-align: center;
  padding: 10px;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

const Signup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loader state
  const dispatch = useDispatch();
  const signupError = useSelector((state) => state.user.signupError);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSignupData({ ...signupData, [id]: value });
  };

  const handleSignup = () => {
    setLoading(true); // Start loader

    setTimeout(() => {
      dispatch(setUser(signupData));
      setSignupData({ firstName: "", lastName: "", email: "", password: "" });
      setLoading(false);
    }, 500);
  };

  return (
    <SignupContainer>
      <Form>
        <h2>Sign Up</h2>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={signupData.firstName}
              onChange={handleInputChange}
            />
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={signupData.lastName}
              onChange={handleInputChange}
            />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleInputChange}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleInputChange}
            />
            <Button onClick={handleSignup}>Sign Up</Button>
            {signupError && <Error>{signupError}</Error>}{" "}
          </>
        )}
      </Form>
    </SignupContainer>
  );
};

export default Signup;
