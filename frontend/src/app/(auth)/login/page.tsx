import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.md};
`;
const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 450px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
const LoginPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.replace("/");
    return null;
  }
  return (
    <Container>
      <Card>
        <Title>Login to LMS</Title>
        <LoginForm />
      </Card>
    </Container>
  );
};
export default LoginPage;
