import styled from "styled-components";
import { Form, Input, Button } from "@/components/ui/FormElements";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

const ResetPasswordPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // API call to reset password
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <Container>
        <Card>
          <Title>Invalid Token</Title>
          <p>The password reset token is invalid or has expired.</p>
          <Link href="/forgot-password" passHref>
            <Button fullWidth style={{ marginTop: "1rem" }}>
              Request New Link
            </Button>
          </Link>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Title>Reset Password</Title>

        {success ? (
          <>
            <p>Your password has been successfully reset.</p>
            <Link href="/login" passHref>
              <Button fullWidth style={{ marginTop: "1rem" }}>
                Login Now
              </Button>
            </Link>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input
              type="password"
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && (
              <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
            )}
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default ResetPasswordPage;
