import styled from "styled-components";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Card = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ImageContainer = styled.div`
  height: 160px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Instructor = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const Students = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

type CourseCardProps = {
  course: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    category: string;
    rating: number;
    students: number;
    status?: string;
  };
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card>
      <ImageContainer>
        {course.status === "draft" && <Badge>Draft</Badge>}
      </ImageContainer>
      <Content>
        <Title>{course.title}</Title>
        <Instructor>By {course.instructor}</Instructor>
        <Description>{course.description}</Description>
        <Meta>
          <Rating>
            <span>★</span> {course.rating}
          </Rating>
          <Students>{course.students} students</Students>
        </Meta>
        <Link href={`/course/${course.id}`} passHref>
          <Button fullWidth style={{ marginTop: "1rem" }}>
            {course.status === "draft" ? "Continue Editing" : "View Course"}
          </Button>
        </Link>
      </Content>
    </Card>
  );
};

export default CourseCard;
