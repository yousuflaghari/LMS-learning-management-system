import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button, Card } from "@/styles/uiStyles";
import { FaArrowLeft, FaArrowRight, FaBookmark } from "react-icons/fa";

const PlayerWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  flex: 3;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LessonTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const LessonDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

type LessonPlayerProps = {
  courseId: string;
  lessonId: string;
};

const LessonPlayer = ({ courseId, lessonId }: LessonPlayerProps) => {
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // Fetch lesson data
    const fetchLesson = async () => {
      try {
        const response = await fetch(
          `/api/courses/${courseId}/lessons/${lessonId}`
        );
        const data = await response.json();
        setLesson(data);
      } catch (error) {
        console.error("Failed to fetch lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [courseId, lessonId]);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // API call to save bookmark
  };

  if (loading) return <div>Loading lesson...</div>;
  if (!lesson) return <div>Lesson not found</div>;

  return (
    <PlayerWrapper>
      <VideoContainer>
        <VideoPlayer
          src={lesson.videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>

      <ContentContainer>
        <div>
          <LessonTitle>{lesson.title}</LessonTitle>
          <BookmarkButton onClick={toggleBookmark}>
            <FaBookmark color={bookmarked ? "#FFD700" : "#666"} />
            {bookmarked ? "Bookmarked" : "Bookmark this lesson"}
          </BookmarkButton>
        </div>

        <Card>
          <LessonDescription>{lesson.description}</LessonDescription>
        </Card>

        <Card>
          <h3>Lesson Resources</h3>
          <ul>
            {lesson.resources?.map((resource: any) => (
              <li key={resource.id}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </Card>

        <Navigation>
          <Button variant="outline">
            <FaArrowLeft /> Previous Lesson
          </Button>
          <Button>
            Next Lesson <FaArrowRight />
          </Button>
        </Navigation>
      </ContentContainer>
    </PlayerWrapper>
  );
};

export default LessonPlayer;
