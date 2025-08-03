// StudentDashboard.js

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

const Container = styled.div`
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

const Section = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  color: #2c3e50;
`;

const CourseItem = styled.div`
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #2ecc71;
  width: ${(props) => props.percent}%;
`;

const SmallText = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
`;

const BoldText = styled.p`
  font-weight: 600;
  color: #2c3e50;
`;

const webinarData = [
  {
    id: 1,
    title: "Mastering React Basics",
    speaker: "John Doe",
    time: "15 Aug, 7:00 PM",
  },
  {
    id: 2,
    title: "Design Thinking Workshop",
    speaker: "Sarah Smith",
    time: "20 Aug, 6:00 PM",
  },
];

const graphData = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 2 },
];

const suggestions = [
  "Advanced Python Programming",
  "UI/UX Design Masterclass",
  "Intro to Machine Learning",
];

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const courses = [
    { id: 1, title: "Mathematics 101", progress: 75 },
    { id: 2, title: "Computer Science Fundamentals", progress: 40 },
    { id: 3, title: "History of Science", progress: 90 },
  ];

  return (
    <RoleBasedLayout>
      <Container>
        <Grid>
          {/* Ongoing Courses */}
          <Section>
            <SectionTitle>🎓 Ongoing Courses</SectionTitle>
            {courses.map((course) => (
              <CourseItem key={course.id}>
                <BoldText>{course.title}</BoldText>
                <ProgressBar>
                  <Progress percent={course.progress} />
                </ProgressBar>
                <SmallText>{course.progress}% completed</SmallText>
              </CourseItem>
            ))}
          </Section>

          {/* Next Payment */}
          <Section>
            <SectionTitle>💳 Next Payment</SectionTitle>
            <BoldText>Due in 12 days</BoldText>
            <SmallText>Amount: Rs. 2000</SmallText>
            <SmallText>Pay before: 15 August</SmallText>
            <button style={{ marginTop: "10px" }}>Proceed to Payment</button>
          </Section>

          {/* Upcoming Webinars */}
          <Section>
            <SectionTitle>📅 Upcoming Webinars</SectionTitle>
            {webinarData.map((webinar) => (
              <div key={webinar.id} style={{ marginBottom: "12px" }}>
                <BoldText>{webinar.title}</BoldText>
                <SmallText>By {webinar.speaker}</SmallText>
                <SmallText>{webinar.time}</SmallText>
              </div>
            ))}
          </Section>

          {/* Spent Time */}
          <Section>
            <SectionTitle>📊 Spent Time (hrs)</SectionTitle>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#4caf50"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Section>

          {/* You May Also Like */}
          <Section>
            <SectionTitle>✨ You May Also Like</SectionTitle>
            {suggestions.map((item, idx) => (
              <SmallText key={idx}>• {item}</SmallText>
            ))}
          </Section>
        </Grid>
      </Container>
    </RoleBasedLayout>
  );
};

export default StudentDashboard;
