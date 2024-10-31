import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCertificate } from "@fortawesome/free-solid-svg-icons";

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

const ForumText = styled.p`
  font-size: 16px;
  color: #666;
`;

// Main Component
const Student = () => {
  const [activeTab, setActiveTab] = useState("Courses");

  // Fake data
  const coursesTodo = 5;
  const overdueCourses = 2;
  const completedCourses = 12;

  const rewards = [
    { title: "Top Performer", icon: faTrophy },
    { title: "100% Attendance", icon: faTrophy },
  ];

  const certificates = [
    { title: "React Developer", icon: faCertificate },
    { title: "JavaScript Master", icon: faCertificate },
  ];

  return (
    <Container>
      {/* First row with 3 divs */}
      <Row>
        <Box>
          <Paragraph>{coursesTodo}</Paragraph>
          <Title>Courses To Do</Title>
        </Box>
        <Box>
          <Paragraph>{overdueCourses}</Paragraph>
          <Title>Overdue Courses</Title>
        </Box>
        <Box>
          <Paragraph>{completedCourses}</Paragraph>
          <Title>Completed Courses</Title>
        </Box>
      </Row>

      {/* Second row with Rewards and Certificates */}
      <Row>
        <Box>
          <Title>Rewards</Title>
          {rewards.map((reward, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={reward.icon} /> {reward.title}
            </div>
          ))}
        </Box>
        <Box>
          <Title>Certificates</Title>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={certificate.icon} /> {certificate.title}
            </div>
          ))}
        </Box>
      </Row>

      {/* Tab section for Courses, Quizzes, and Forum Activity */}
      <TabContainer>
        <TabButtons>
          <TabButton
            active={activeTab === "Courses"}
            onClick={() => setActiveTab("Courses")}
          >
            Courses
          </TabButton>
          <TabButton
            active={activeTab === "Quizzes"}
            onClick={() => setActiveTab("Quizzes")}
          >
            Quizzes
          </TabButton>
          <TabButton
            active={activeTab === "Forum"}
            onClick={() => setActiveTab("Forum")}
          >
            Forum Activity
          </TabButton>
        </TabButtons>

        <TabContent>
          {activeTab === "Courses" && (
            <div>
              <TabHeading>My Courses</TabHeading>
              <ForumText>List of enrolled courses...</ForumText>
            </div>
          )}
          {activeTab === "Quizzes" && (
            <div>
              <TabHeading>My Quizzes</TabHeading>
              <ForumText>List of upcoming quizzes...</ForumText>
            </div>
          )}
          {activeTab === "Forum" && (
            <div>
              <TabHeading>Forum Activity</TabHeading>
              <ForumText>Recent discussions and posts...</ForumText>
            </div>
          )}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default Student;
