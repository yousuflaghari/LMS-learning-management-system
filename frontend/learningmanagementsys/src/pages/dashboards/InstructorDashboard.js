// InstructorDashboard.js

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RoleBasedLayout from "../../components/RoleBaseLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ---------- Styled Components ----------

const Container = styled.div`
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

const Section = styled.div`
  background: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  min-height: 180px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #2c3e50;
`;

const BoldText = styled.p`
  font-weight: 600;
  font-size: 0.95rem;
  color: #2c3e50;
`;

const SmallText = styled.p`
  color: #7f8c8d;
  font-size: 0.82rem;
  margin: 0;
`;

const CourseItem = styled.div`
  margin-bottom: 12px;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 4px;
`;

const Progress = styled.div`
  height: 100%;
  background: #3498db;
  width: ${(props) => props.percent}%;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

// ---------- Fake Data ----------

const instructorCourses = [
  { id: 1, title: "React for Beginners", enrolled: 120, progress: 80 },
  { id: 2, title: "Advanced JavaScript", enrolled: 90, progress: 60 },
  { id: 3, title: "UI Design Principles", enrolled: 75, progress: 40 },
];

const recentQuizzes = [
  { id: 1, title: "React Basics Quiz", students: 35 },
  { id: 2, title: "JavaScript Advanced Quiz", students: 28 },
  { id: 3, title: "Design Thinking Quiz", students: 42 },
];

const earningsData = {
  nextPayment: "Rs. 10,000",
  dueDate: "15 August",
  daysLeft: 12,
};

const activeStudentsGraph = [
  { day: "Mon", students: 50 },
  { day: "Tue", students: 60 },
  { day: "Wed", students: 45 },
  { day: "Thu", students: 70 },
  { day: "Fri", students: 30 },
  { day: "Sat", students: 40 },
  { day: "Sun", students: 25 },
];

const courseSuggestions = [
  "Mastering TypeScript",
  "Full Stack Development Bootcamp",
  "Effective Teaching Techniques",
];

// ---------- Component ----------

const InstructorDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <RoleBasedLayout>
      <Container>
        <Grid>
          <Section>
            <SectionTitle>📚 Courses Created</SectionTitle>
            {instructorCourses.map((course) => (
              <CourseItem key={course.id}>
                <BoldText>{course.title}</BoldText>
                <SmallText>{course.enrolled} students enrolled</SmallText>
                <ProgressBar>
                  <Progress percent={course.progress} />
                </ProgressBar>
                <SmallText>{course.progress}% course completed</SmallText>
              </CourseItem>
            ))}
          </Section>

          {/* Earnings */}
          <Section>
            <SectionTitle>💰 Earnings</SectionTitle>
            <BoldText>{earningsData.nextPayment}</BoldText>
            <SmallText>Due in {earningsData.daysLeft} days</SmallText>
            <SmallText>Pay before: {earningsData.dueDate}</SmallText>
            <Button>Withdraw</Button>
          </Section>

          {/* Recent Quizzes */}
          <Section>
            <SectionTitle>📝 Recent Quizzes</SectionTitle>
            {recentQuizzes.map((quiz) => (
              <div key={quiz.id} style={{ marginBottom: "10px" }}>
                <BoldText>{quiz.title}</BoldText>
                <SmallText>{quiz.students} students attempted</SmallText>
              </div>
            ))}
          </Section>

          {/* Active Students Graph */}
          <Section>
            <SectionTitle>📊 Active Students (per day)</SectionTitle>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={activeStudentsGraph}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#9b59b6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Section>

          {/* Suggested Courses */}
          <Section>
            <SectionTitle>✨ Course Suggestions</SectionTitle>
            {courseSuggestions.map((item, idx) => (
              <SmallText key={idx}>• {item}</SmallText>
            ))}
          </Section>
        </Grid>
      </Container>
    </RoleBasedLayout>
  );
};

export default InstructorDashboard;
