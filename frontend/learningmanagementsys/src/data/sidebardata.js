// src/data/sidebarData.js

export const getSidebarData = (role) => {
  const commonItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" },
  ];

  switch (role) {
    case "admin":
      return [
        ...commonItems,
        { id: "users", label: "Manage Users", path: "/admin/users" },
        { id: "courses", label: "Manage Courses", path: "/admin/courses" },
        { id: "settings", label: "System Settings", path: "/admin/settings" },
      ];
    case "instructor":
      return [
        ...commonItems,
        { id: "my-courses", label: "My Courses", path: "/instructor/courses" },
        {
          id: "assignments",
          label: "Assignments",
          path: "/instructor/assignments",
        },
        { id: "grades", label: "Grades", path: "/instructor/grades" },
      ];
    case "student":
      return [
        ...commonItems,
        { id: "enroll", label: "Enroll in Courses", path: "/student/enroll" },
        { id: "my-courses", label: "My Courses", path: "/student/courses" },
        { id: "grades", label: "My Grades", path: "/student/grades" },
      ];
    default:
      return commonItems;
  }
};
