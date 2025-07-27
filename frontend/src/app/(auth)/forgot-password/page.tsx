import styled from "styled-components";
import { Form, Input, Button } from "@/components/ui/FormElements";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Link from "next/link";

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

const Description = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // API call to send reset password email
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Forgot Password</Title>

        {submitted ? (
          <>
            <Description>
              We've sent a password reset link to your email address. Please
              check your inbox.
            </Description>
            <Link href="/login" passHref>
              <Button fullWidth>Back to Login</Button>
            </Link>
          </>
        ) : (
          <>
            <Description>
              Enter your email address and we'll send you a link to reset your
              password.
            </Description>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && (
                <div style={{ color: "red", marginBottom: "1rem" }}>
                  {error}
                </div>
              )}
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </Form>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Link href="/login">Back to Login</Link>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
};

export default ForgotPasswordPage;
