import { createContext, useContext, useState, ReactNode } from "react";

type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  modules: Module[];
};

type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

type Lesson = {
  id: string;
  title: string;
  content: string;
  type: "video" | "text" | "quiz" | "assignment";
  duration: number;
};

type CourseContextType = {
  currentCourse: Course | null;
  setCurrentCourse: (course: Course | null) => void;
  currentModule: Module | null;
  setCurrentModule: (module: Module | null) => void;
  currentLesson: Lesson | null;
  setCurrentLesson: (lesson: Lesson | null) => void;
  courseProgress: { [courseId: string]: { [lessonId: string]: boolean } };
  markLessonComplete: (courseId: string, lessonId: string) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [courseProgress, setCourseProgress] = useState<{
    [courseId: string]: { [lessonId: string]: boolean };
  }>({});

  const markLessonComplete = (courseId: string, lessonId: string) => {
    setCourseProgress((prev) => ({
      ...prev,
      [courseId]: {
        ...(prev[courseId] || {}),
        [lessonId]: true,
      },
    }));
  };

  return (
    <CourseContext.Provider
      value={{
        currentCourse,
        setCurrentCourse,
        currentModule,
        setCurrentModule,
        currentLesson,
        setCurrentLesson,
        courseProgress,
        markLessonComplete,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};
