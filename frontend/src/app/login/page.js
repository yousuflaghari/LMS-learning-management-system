"use client";
import { useState } from "react";
import styled from "styled-components";
import lmsImage from "../assets/lms.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

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

const HEADING = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
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

const Subcontainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border: 1px solid;
  height: 570px;
  width: 1260px;
`;

const Link = styled.a`
  display: flex;
  justify-content: end;
  font-size: 10px;
`;

const Button = styled.button`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 40px;
  color: white;
  font-weight: bold;
  padding: 5px;
  border: none;
  cursor: pointer;
`;

const Signupheading = styled.h2`
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Signuplink = styled.a`
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Signupcontainer = styled.div`
  margin-top: 84px;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Subcontainer image={lmsImage.src}>
      <MAIN>
        <CONTAINER>
          <HEADING>Login</HEADING>

          <StyledInputName htmlFor="username">Username:</StyledInputName>
          <StyledInput
            id="username"
            type="text"
            placeholder="Type your Username"
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInputName htmlFor="password">Password:</StyledInputName>
          <StyledInput
            id="password"
            type="password"
            placeholder="Type your Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link href="/forgotpasword">Forgot password?</Link>

          <Button onClick={handleclicklogin}>LOGIN</Button>

          <Signupheading>Or Sign Up Using</Signupheading>

          <IconWrapper>
            <Circle bgColor="#3b5998">
              <FontAwesomeIcon icon={faFacebookF} />
            </Circle>
            <Circle bgColor="#1da1f2">
              <FontAwesomeIcon icon={faTwitter} />
            </Circle>
            <Circle bgColor="#db4437">
              <FontAwesomeIcon icon={faGoogle} />
            </Circle>
          </IconWrapper>
          <Signupcontainer>
            <Signupheading>Or Sign Up Using</Signupheading>
            <Signuplink>Sign Up</Signuplink>
          </Signupcontainer>
        </CONTAINER>
      </MAIN>
    </Subcontainer>
  );
};

export default Login;
