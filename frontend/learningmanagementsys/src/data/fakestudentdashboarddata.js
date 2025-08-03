// src/fakeData/studentDashboardData.js
import {
  FaBook,
  FaCertificate,
  FaClock,
  FaUser,
  FaPlay,
  FaSearch,
  FaDownload,
} from "react-icons/fa";

export const studentStats = [
  { label: "Courses Enrolled", value: 5, icon: <FaBook /> },
  { label: "Quizzes Attempted", value: 12, icon: <FaClock /> },
  { label: "Assignments Submitted", value: 8, icon: <FaUser /> },
  { label: "Certificates Earned", value: 3, icon: <FaCertificate /> },
];

export const activeCourses = [
  { title: "React Fundamentals", progress: 75, lastAccess: "2025-07-30" },
  { title: "Advanced JavaScript", progress: 60, lastAccess: "2025-07-28" },
  { title: "UI/UX Basics", progress: 85, lastAccess: "2025-07-26" },
];

export const upcomingTasks = [
  { title: "Submit UI Assignment", deadline: "2025-08-04", timeLeft: "2 days" },
  { title: "JS Quiz #3", deadline: "2025-08-05", timeLeft: "3 days" },
];

export const activityLog = [
  "Completed Module 4 of React",
  "Passed JavaScript Quiz 2",
  "Submitted CSS assignment",
  "Unlocked Certificate: HTML Basics",
];

export const quickLinks = [
  { label: "Continue Course", icon: <FaPlay /> },
  { label: "Browse Courses", icon: <FaSearch /> },
  { label: "Download Certificate", icon: <FaDownload /> },
  { label: "View Profile", icon: <FaUser /> },
];

export const tips = [
  "Review your notes before bed.",
  "Practice a coding challenge daily.",
  "Break large tasks into smaller chunks.",
];
