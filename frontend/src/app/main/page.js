"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/dashboard";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const VerticalTabContainer = styled.div`
  width: 250px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ccc;
`;

const VerticalTabButton = styled.button`
  padding: 15px 20px;
  width: 100%;
  background-color: ${(props) => (props.active ? "#4caf50" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  h2 {
    margin-top: 0;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

const Main = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <TabContent>
            <h2>Dashboard</h2>
            <Dashboard></Dashboard>
          </TabContent>
        );
      case "Forum":
        return (
          <TabContent>
            <h2>Forum</h2>
            <p>Welcome to the forum.</p>
          </TabContent>
        );
      case "Account":
        return (
          <TabContent>
            <h2>Account</h2>
            <p>Manage your account settings here.</p>
          </TabContent>
        );
      case "Login":
        return (
          <TabContent>
            <h2>Login</h2>
            <p>Access your account by logging in.</p>
          </TabContent>
        );
      case "Messages":
        return (
          <TabContent>
            <h2>Messages</h2>
            <p>Check your messages here.</p>
          </TabContent>
        );
      case "Courses":
        return (
          <TabContent>
            <h2>Courses</h2>
            <p>Browse available courses here.</p>
          </TabContent>
        );
      default:
        return (
          <TabContent>
            <h2>Dashboard</h2>
            <p>Welcome to the main dashboard.</p>
          </TabContent>
        );
    }
  };

  return (
    <Container>
      <VerticalTabContainer>
        <VerticalTabButton
          active={activeTab === "Dashboard"}
          onClick={() => setActiveTab("Dashboard")}
        >
          Dashboard
        </VerticalTabButton>
        <VerticalTabButton
          active={activeTab === "Forum"}
          onClick={() => setActiveTab("Forum")}
        >
          Forum
        </VerticalTabButton>
        <VerticalTabButton
          active={activeTab === "Account"}
          onClick={() => setActiveTab("Account")}
        >
          Account
        </VerticalTabButton>
        <VerticalTabButton
          active={activeTab === "Login"}
          onClick={() => setActiveTab("Login")}
        >
          Login
        </VerticalTabButton>
        <VerticalTabButton
          active={activeTab === "Messages"}
          onClick={() => setActiveTab("Messages")}
        >
          Messages
        </VerticalTabButton>
        <VerticalTabButton
          active={activeTab === "Courses"}
          onClick={() => setActiveTab("Courses")}
        >
          Courses
        </VerticalTabButton>
      </VerticalTabContainer>

      <ContentArea>{renderTabContent()}</ContentArea>
    </Container>
  );
};

export default Main;
