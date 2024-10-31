import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Box = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #4caf50;
`;

const TabContainer = styled.div`
  margin-top: 20px;
`;

const TabButtons = styled.div`
  display: flex;
  justify-content: space-around;
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

const TabContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TabHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UserItem = styled.li`
  margin: 5px 0;
`;

// Main Component
const Admin = () => {
  const [activeTab, setActiveTab] = useState("Users");

  const totalStudents = 30; // Replace with dynamic data
  const totalInstructors = 10; // Replace with dynamic data
  const totalCourses = 20; // Replace with dynamic data

  const students = [
    "Aisha Khan",
    "Bilal Ahmed",
    "Fatima Ali",
    "Zain Malik",
    "Sana Iqbal",
    "Omar Farooq",
    "Hina Raza",
    "Samiullah Khan",
    "Alina Bashir",
    "Ali Hassan",
    "Nida Khan",
    "Bilal Qureshi",
    "Sara Javed",
    "Kamran Shah",
    "Maria Tariq",
    "Usman Anwar",
    "Tasneem Bibi",
    "Arham Sadiq",
    "Saira Malik",
    "Shahbaz Ahmad",
    "Rida Gul",
    "Asim Noor",
    "Noreen Ahmed",
    "Taha Ali",
    "Areeba Zafar",
    "Danish Malik",
    "Iqra Yousaf",
    "Muneeb Khan",
    "Shazia Sadiq",
    "Faizan Rafiq",
  ];

  const instructors = [
    "Dr. Ali Khan",
    "Prof. Sarah Ahmed",
    "Mr. Zain Malik",
    "Ms. Fatima Noor",
    "Dr. Omar Farooq",
    "Mr. Samiullah Khan",
    "Ms. Alina Bashir",
    "Mr. Ali Hassan",
    "Ms. Nida Khan",
    "Prof. Bilal Qureshi",
  ];

  return (
    <Container>
      {/* First row with admin stats */}
      <Row>
        <Box>
          <Paragraph>{totalStudents}</Paragraph>
          <Title>Total Students</Title>
        </Box>
        <Box>
          <Paragraph>{totalInstructors}</Paragraph>
          <Title>Total Instructors</Title>
        </Box>
        <Box>
          <Paragraph>{totalCourses}</Paragraph>
          <Title>Total Courses</Title>
        </Box>
      </Row>

      {/* Tab section for Users, Courses, and Analytics */}
      <TabContainer>
        <TabButtons>
          <TabButton
            active={activeTab === "Users"}
            onClick={() => setActiveTab("Users")}
          >
            Users
          </TabButton>
          <TabButton
            active={activeTab === "Courses"}
            onClick={() => setActiveTab("Courses")}
          >
            Courses
          </TabButton>
          <TabButton
            active={activeTab === "Analytics"}
            onClick={() => setActiveTab("Analytics")}
          >
            Analytics
          </TabButton>
        </TabButtons>

        <TabContent>
          {activeTab === "Users" && (
            <>
              <TabHeading>User List</TabHeading>
              <h4>Students</h4>
              <UserList>
                {students.map((student, index) => (
                  <UserItem key={index}>{student}</UserItem>
                ))}
              </UserList>
              <h4>Instructors</h4>
              <UserList>
                {instructors.map((instructor, index) => (
                  <UserItem key={index}>{instructor}</UserItem>
                ))}
              </UserList>
            </>
          )}
          {activeTab === "Courses" && (
            <>
              <TabHeading>Course Management</TabHeading>
              <Paragraph>List of all courses will be displayed here.</Paragraph>
            </>
          )}
          {activeTab === "Analytics" && (
            <>
              <TabHeading>Performance Analytics</TabHeading>
              <Paragraph>
                Data visualization and metrics regarding students performance.
              </Paragraph>
            </>
          )}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default Admin;
