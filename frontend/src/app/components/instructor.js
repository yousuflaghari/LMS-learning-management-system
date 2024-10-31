import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMedal } from "@fortawesome/free-solid-svg-icons";

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
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 12px;
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
  font-size: 12px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const TabContent = styled.div`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TabHeading = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
`;

const ForumText = styled.p`
  font-size: 16px;
  color: #666;
`;

const ContentWrapper = styled.div`
  font-size: 10px;
`;

// Main Component
const Instructor = () => {
  const [activeTab, setActiveTab] = useState("Courses");

  const courses = [
    "Introduction to Programming",
    "Web Development Bootcamp",
    "Data Structures and Algorithms",
    "React.js Fundamentals",
    "Advanced CSS Techniques",
    "JavaScript Essentials",
    "Database Management Systems",
    "User Experience Design",
    "Mobile App Development",
    "Machine Learning Basics",
    "Software Engineering Principles",
    "Cloud Computing Essentials",
    "Digital Marketing Strategies",
    "Cybersecurity Fundamentals",
    "Graphic Design Basics",
    "API Development with Django",
    "DevOps Practices",
    "Game Development with Unity",
    "Artificial Intelligence Concepts",
    "Responsive Web Design",
  ];

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

  const instructorAchievements = [
    { title: "Best Mentor Award", icon: faStar },
    { title: "Most Courses Completed", icon: faMedal },
  ];

  return (
    <Container>
      <Row>
        <Box>
          <Paragraph>{courses.length}</Paragraph>
          <Title>Available Courses</Title>
        </Box>
        <Box>
          <Paragraph>{students.length}</Paragraph>
          <Title>Total Students</Title>
        </Box>
        <Box>
          <Paragraph>15</Paragraph>
          <Title>Courses Assigned</Title>
        </Box>
      </Row>

      <Row>
        <Box>
          <Title>Achievements</Title>
          {instructorAchievements.map((achievement, index) => (
            <ContentWrapper key={index}>
              <FontAwesomeIcon icon={achievement.icon} /> {achievement.title}
            </ContentWrapper>
          ))}
        </Box>
        <Box>
          <Title>Instructor Highlights</Title>
          <ContentWrapper>
            <FontAwesomeIcon icon={faStar} /> Instructor of the Year
          </ContentWrapper>
          <ContentWrapper>
            <FontAwesomeIcon icon={faMedal} /> 500+ Hours of Teaching
          </ContentWrapper>
        </Box>
      </Row>

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
            active={activeTab === "Announcements"}
            onClick={() => setActiveTab("Announcements")}
          >
            Announcements
          </TabButton>
        </TabButtons>

        <TabContent>
          {activeTab === "Courses" && (
            <ContentWrapper>
              {courses.map((course, index) => (
                <ForumText key={index}>
                  {index + 1} : {course}
                </ForumText>
              ))}
            </ContentWrapper>
          )}
          {activeTab === "Quizzes" && (
            <ContentWrapper>
              <TabHeading>Student Quizzes</TabHeading>
              {students.map((student, index) => (
                <ForumText key={index}>
                  {index + 1} : {student}
                </ForumText>
              ))}
            </ContentWrapper>
          )}
          {activeTab === "Announcements" && (
            <ContentWrapper>
              <TabHeading>Instructor Announcements</TabHeading>
              <ForumText>
                Latest announcements regarding upcoming classes and events...
              </ForumText>
            </ContentWrapper>
          )}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default Instructor;
