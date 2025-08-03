import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import InstructorDashboard from "./pages/dashboards/InstructorDashboard";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import MyDashboard from "./pages/student/MyDashboard";
import CourseDashboard from "./pages/Instructor/CourseDashboard";
import InstructorMyCourses from "./pages/Instructor/MyCourse";
import InstructorQuizzes from "./pages/Instructor/Quizzes";
import Earnings from "./pages/Instructor/Earnings";
import EnrolledCourses from "./pages/student/EnrolledCourses";
import ProgressReport from "./pages/student/ProgressReport";
import Rewards from "./pages/student/Reward";
import StudentCertificates from "./pages/student/StudentcCrtificates";
import AdminReports from "./pages/admin/Reports";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLogs from "./pages/admin/AdminLogs";
import CertificateManagement from "./pages/Instructor/InstructorCertificates";
import AdminUsers from "./pages/admin/ManageUsers";

const AppContainer = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
`;

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  return (
    <AppContainer>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Role-specific dashboards */}
          <Route
            path="/dashboards/admindashboard"
            element={
              isAuthenticated && role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/dashboards/instructordashboard"
            element={
              isAuthenticated && role === "instructor" ? (
                <InstructorDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/dashboards/studentdashboard"
            element={
              isAuthenticated && role === "student" ? (
                <StudentDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* Admin Routes */}
          <Route path="/admin/overview" element={<AdminOverview />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/logs" element={<AdminLogs />} />

          {/* Instructor Routes */}
          <Route path="/instructor/dashboard" element={<CourseDashboard />} />
          <Route path="/instructor/courses" element={<InstructorMyCourses />} />
          <Route path="/instructor/quizzes" element={<InstructorQuizzes />} />
          <Route
            path="/instructor/certificates"
            element={<CertificateManagement />}
          />
          <Route path="/instructor/earnings" element={<Earnings />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<MyDashboard />} />
          <Route
            path="/student/enrolledcourses"
            element={<EnrolledCourses />}
          />
          <Route path="/student/progress" element={<ProgressReport />} />
          <Route path="/student/rewards" element={<Rewards />} />
          <Route
            path="/student/certificates"
            element={<StudentCertificates />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
