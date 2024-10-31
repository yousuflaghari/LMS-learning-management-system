"use client";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link"; // Import Link component
import { setUser } from "./store/slice/loginslice"; // Import setUser action

// Main Container
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

// Title
const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
`;

// Button Container
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1rem;
`;

// Button Styles
const LoginButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

// Main Component
const MainLoginPage = () => {
  const [showRoleButtons, setShowRoleButtons] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setShowRoleButtons(true);
  };

  const handleRoleSelect = (role) => {
    dispatch(
      setUser({
        username: "",
        email: "",
        category: role,
      })
    ); // Set the role in Redux
  };

  return (
    <MainContainer>
      <Title>Welcome to LMS</Title>
      {!showRoleButtons ? (
        <LoginButton onClick={handleLoginClick}>LOGIN APP</LoginButton>
      ) : (
        <ButtonContainer>
          <Link href="/login" passHref legacyBehavior>
            <LoginButton onClick={() => handleRoleSelect("student")}>
              STUDENT
            </LoginButton>
          </Link>
          <Link href="/login" passHref legacyBehavior>
            <LoginButton onClick={() => handleRoleSelect("instructor")}>
              INSTRUCTOR
            </LoginButton>
          </Link>
          <Link href="/login" passHref legacyBehavior>
            <LoginButton onClick={() => handleRoleSelect("admin")}>
              ADMIN
            </LoginButton>
          </Link>
        </ButtonContainer>
      )}
    </MainContainer>
  );
};

export default MainLoginPage;
