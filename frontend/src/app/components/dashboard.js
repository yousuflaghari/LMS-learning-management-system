import React, { useState } from "react";
import styled from "styled-components";
import Student from "../components/student";
import Instructor from "../components/instructor";
import Admin from "../components/admin";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: #f1f1f1;
  border-bottom: 2px solid #ccc;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#4caf50" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const TabContentContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TabContent = styled.div`
  h2 {
    margin-top: 0;
    font-size: 14px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;
const Maindashboard = styled.div`
  height: 100%;
  background-color: blue;
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Student");

  const openDashboard = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Maindashboard>
      <TabContainer>
        <TabButton
          active={activeTab === "Student"}
          onClick={() => openDashboard("Student")}
        >
          Student
        </TabButton>
        <TabButton
          active={activeTab === "Instructor"}
          onClick={() => openDashboard("Instructor")}
        >
          Instructor
        </TabButton>
        <TabButton
          active={activeTab === "Admin"}
          onClick={() => openDashboard("Admin")}
        >
          Admin
        </TabButton>
      </TabContainer>

      <TabContentContainer>
        {activeTab === "Student" && (
          <TabContent>
            <Student></Student>
          </TabContent>
        )}
        {activeTab === "Instructor" && (
          <TabContent>
            <Instructor></Instructor>
          </TabContent>
        )}
        {activeTab === "Admin" && (
          <TabContent>
            <Admin></Admin>
          </TabContent>
        )}
      </TabContentContainer>
    </Maindashboard>
  );
};

export default Dashboard;
