export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "instructor" | "student";
};
export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: User;
  students: User[];
  modules: Module[];
};
export type Module = {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
};
export type Lesson = {
  id: string;
  title: string;
  content: string;
  type: "video" | "pdf" | "text" | "quiz";
  duration: number;
  order: number;
};
