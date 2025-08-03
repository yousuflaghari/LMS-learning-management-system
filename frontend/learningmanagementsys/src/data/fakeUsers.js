// src/data/fakeUsers.js
export const fakeUsers = [
  {
    id: 1,
    email: "admin@lms.com",
    password: "admin123",
    role: "admin",
    menu: [
      { label: "📋 Dashboard Overview", path: "/admin/dashboard" },
      { label: "🛠️ Manage Users", path: "/admin/users" },
      { label: "📈 Reports", path: "/admin/reports" },
      { label: "⚙️ Settings", path: "/admin/settings" },
      { label: "🔐 Admin Logs", path: "/admin/logs" },
    ],
  },
  {
    id: 2,
    email: "instructor@lms.com",
    password: "instructor123",
    role: "instructor",
    menu: [
      { label: "📋 Course Dashboard", path: "/instructor/dashboard" },
      { label: "📚 My Courses", path: "/instructor/courses" },
      { label: "📝 Quizzes", path: "/instructor/quizzes" },
      { label: "🎓 Certificates", path: "/instructor/certificates" },
      { label: "🧾 Earnings", path: "/instructor/earnings" },
    ],
  },
  {
    id: 3,
    email: "student@lms.com",
    password: "student123",
    role: "student",
    menu: [
      { label: "📋 My Dashboard", path: "/student/dashboard" },
      { label: "📚 Enrolled Courses", path: "/student/enrolledcourses" },
      { label: "📊 Progress Report", path: "/student/progress" },
      { label: "🎁 Rewards", path: "/student/rewards" },
      { label: "📜 Certificates", path: "/student/certificates" },
    ],
  },
];
