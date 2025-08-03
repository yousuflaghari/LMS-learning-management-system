// src/components/dashboards/student/MyDashboard.js
import React from "react";
import styled from "styled-components";
import {
  studentStats,
  activeCourses,
  upcomingTasks,
  activityLog,
  quickLinks,
  tips,
} from "../../../src/data/fakestudentdashboarddata";
import {
  FaPlay,
  FaBook,
  FaCertificate,
  FaClock,
  FaUser,
  FaDownload,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const DashboardWrapper = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const WelcomeBox = styled.div`
  background-color: #f5f8ff;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
`;

const CourseCard = styled.div`
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Progress = styled.div`
  height: 100%;
  background: #4caf50;
  width: ${(props) => props.percent}%;
`;

const Button = styled.button`
  background: #007bff;
  border: none;
  color: white;
  padding: 0.4rem 0.8rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ActivityItem = styled.li`
  margin-bottom: 0.5rem;
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const QuickLink = styled.div`
  background: #f1f1f1;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const TipBox = styled.div`
  background: #fffbe6;
  padding: 1rem;
  border-left: 5px solid #ffc107;
  border-radius: 8px;
`;

const MyDashboard = () => {
  const today = new Date().toDateString();

  return (
    <RoleBasedLayout>
      <DashboardWrapper>
        {/* 1. Welcome Section */}
        <Section>
          <WelcomeBox>
            <div>
              <h1>👋 Welcome back, Yousuf!</h1>
              <p>{today}</p>
              <em>"Stay consistent, even on tough days!"</em>
            </div>
          </WelcomeBox>
        </Section>

        {/* 2. At a Glance Stats */}
        <Section>
          <Heading>📊 Your Stats</Heading>
          <StatsGrid>
            {studentStats.map((stat, i) => (
              <StatCard key={i}>
                <div style={{ fontSize: "1.4rem" }}>{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </Section>

        {/* 3. Course Progress Snapshot */}
        <Section>
          <Heading>📘 Active Courses</Heading>
          {activeCourses.map((course, i) => (
            <CourseCard key={i}>
              <h3>{course.title}</h3>
              <small>Last Accessed: {course.lastAccess}</small>
              <ProgressBar>
                <Progress percent={course.progress} />
              </ProgressBar>
              <Button>
                <FaPlay /> Resume
              </Button>
            </CourseCard>
          ))}
        </Section>

        {/* 4. Upcoming To-Do Section */}
        <Section>
          <Heading>📅 Upcoming Tasks</Heading>
          {upcomingTasks.map((task, i) => (
            <CourseCard key={i}>
              <h4>{task.title}</h4>
              <p>Deadline: {task.deadline}</p>
              <p>Time Left: {task.timeLeft}</p>
            </CourseCard>
          ))}
        </Section>

        {/* 5. Recent Activity Log */}
        <Section>
          <Heading>🕒 Recent Activity</Heading>
          <ActivityList>
            {activityLog.map((activity, i) => (
              <ActivityItem key={i}>✅ {activity}</ActivityItem>
            ))}
          </ActivityList>
        </Section>

        {/* 6. Quick Actions */}
        <Section>
          <Heading>⚡ Quick Actions</Heading>
          <QuickLinks>
            {quickLinks.map((link, i) => (
              <QuickLink key={i}>
                {link.icon} {link.label}
              </QuickLink>
            ))}
          </QuickLinks>
        </Section>

        {/* 7. Tip of the Day */}
        <Section>
          <Heading>💡 Motivation & Tips</Heading>
          <TipBox>
            <FaLightbulb /> {tips[Math.floor(Math.random() * tips.length)]}
          </TipBox>
        </Section>
      </DashboardWrapper>
    </RoleBasedLayout>
  );
};

export default MyDashboard;
