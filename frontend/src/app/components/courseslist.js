import React from "react";
import CourseCard from "@/components/CourseCard";

const CoursesList = () => {
  return (
    <div>
      <h1>Available Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
