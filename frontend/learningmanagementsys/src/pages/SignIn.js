import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { fakeUsers } from "../data/fakeUsers";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0b5ed7;
  }
`;

const Error = styled.p`
  color: #ff6b6b;
  text-align: center;
  margin-top: 20px;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, role } = useSelector((state) => state.auth);
  console.log(isAuthenticated, role, "aaa");
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = fakeUsers.find(
      (user) =>
        user.email === email && user.password === password && user.role === role
    );

    if (user) {
      dispatch(
        login({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        })
      );
    } else {
      setError("Invalid credentials for selected role");
    }
  };

  // ✅ Navigate only when auth state updates
  useEffect(() => {
    if (isAuthenticated && role) {
      navigate(`/dashboards/${role}dashboard`);
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign In as {role}</Title>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </InputGroup>
        <Button type="submit">Sign In</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Container>
  );
};

export default SignIn;
