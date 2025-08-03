import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRole } from "../redux/slices/authSlice";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #2a66c3;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const RoleButton = styled.button`
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  color: #151515ff;
  cursor: pointer;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(231, 145, 32, 0.25);
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    dispatch(setRole(role));
    navigate("/signin");
  };

  return (
    <Container>
      <Title>Learning Management System</Title>
      <ButtonGroup>
        <RoleButton onClick={() => handleRoleSelect("admin")}>
          Administrator
        </RoleButton>
        <RoleButton onClick={() => handleRoleSelect("instructor")}>
          Instructor
        </RoleButton>
        <RoleButton onClick={() => handleRoleSelect("student")}>
          Student
        </RoleButton>
      </ButtonGroup>
    </Container>
  );
};

export default MainPage;
