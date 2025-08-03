// src/components/student/EnrolledCourses.js

import React, { useState } from "react";
import styled from "styled-components";
import { activeCourses as enrolledCoursesData } from "../../data/fakestudentdashboarddata"; // you need to create this fake data file
import { FaSearch, FaCertificate } from "react-icons/fa";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import RoleBasedLayout from "../../components/RoleBaseLayout";
import { BsDownload } from "react-icons/bs";

const EnrolledCourses = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Latest");

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleStatusChange = (e) => setStatusFilter(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const filteredCourses = enrolledCoursesData
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((course) =>
      statusFilter === "All" ? true : course.status === statusFilter
    )
    .sort((a, b) => {
      if (sortOption === "Latest")
        return new Date(b.enrolledDate) - new Date(a.enrolledDate);
      if (sortOption === "Alphabetical") return a.title.localeCompare(b.title);
      if (sortOption === "Progress") return b.progress - a.progress;
      return 0;
    });

  return (
    <RoleBasedLayout>
      <Container>
        <Header>📚 Enrolled Courses</Header>
        <Filters>
          <Input
            type="text"
            placeholder="Search by course name..."
            value={search}
            onChange={handleSearchChange}
          />
          <Select value={statusFilter} onChange={handleStatusChange}>
            <option value="All">All</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </Select>
          <Select value={sortOption} onChange={handleSortChange}>
            <option value="Latest">Sort: Latest</option>
            <option value="Alphabetical">Sort: Alphabetical</option>
            <option value="Progress">Sort: Progress</option>
          </Select>
        </Filters>
        <Courses>
          {filteredCourses.map((course) => (
            <Card key={course.id}>
              <Content>
                <Title>{course.title}</Title>
                <Instructor>👨‍🏫 {course.instructor}</Instructor>
                <Meta>
                  <span>📅 {course.enrolledDate}</span>
                  <span>🕒 {course.timeSpent} hrs</span>
                  <span>🧾 {course.status}</span>
                </Meta>
                <ProgressWrapper>
                  <ProgressBar width={course.progress} />
                  <ProgressPercent>{course.progress}%</ProgressPercent>
                </ProgressWrapper>
                <Details>
                  <span>
                    ✅ Modules: {course.modulesCompleted}/{course.totalModules}
                  </span>
                  <span>
                    📝 Quizzes: {course.quizzesPassed}/{course.quizzesAttempted}
                  </span>
                  <span>📥 Assignments: {course.assignmentsSubmitted}</span>
                </Details>
                <Actions>
                  <Button primary>
                    <MdOutlinePlayCircleFilled /> Resume
                  </Button>
                  {course.status === "Completed" && (
                    <Button>
                      <BsDownload /> Certificate
                    </Button>
                  )}
                  <Button danger>Unenroll</Button>
                </Actions>
              </Content>
            </Card>
          ))}
        </Courses>
      </Container>
    </RoleBasedLayout>
  );
};

export default EnrolledCourses;

// Styled Components
const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  flex: 1;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const Courses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
`;

const Instructor = styled.p`
  font-style: italic;
`;

const Meta = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #555;
`;
const ProgressWrapper = styled.div`
  width: 100%;
  height: 14px;
  background: #e0e0e0;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
`;

const ProgressBar = styled.div`
  width: ${({ width }) => width || 0}%;
  height: 100%;
  background: linear-gradient(to right, #4caf50, #81c784);
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: ${({ width }) => (width > 10 ? "flex-end" : "center")};
  padding-right: 6px;
`;

const ProgressPercent = styled.span`
  font-size: 0.75rem;
  color: white;
  font-weight: 500;
`;

const Details = styled.div`
  font-size: 0.9rem;
  display: flex;
  gap: 1.5rem;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${({ primary, danger }) =>
    primary ? "#4caf50" : danger ? "#f44336" : "#2196f3"};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`;
