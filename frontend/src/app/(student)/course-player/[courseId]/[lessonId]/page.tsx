import styled from "styled-components";
import { useParams } from "next/navigation";
import LessonPlayer from "@/components/courses/LessonPlayer";
import StudentLayout from "@/components/layout/StudentLayout";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CoursePlayerPage = () => {
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  return (
    <StudentLayout>
      <PlayerContainer>
        <LessonPlayer courseId={courseId} lessonId={lessonId} />
      </PlayerContainer>
    </StudentLayout>
  );
};

export default CoursePlayerPage;
