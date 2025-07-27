import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input, Button, Form } from "@/components/ui/FormElements";
import Link from "next/link";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // API call to register
      // Simulate API call
      setTimeout(() => {
        const userData = {
          id: "new-user",
          name: formData.name,
          email: formData.email,
          role: formData.role,
        };

        // In a real app, you would set the user and tokens here
        console.log("Registered user:", userData);
        setLoading(false);

        // Redirect to login or dashboard
      }, 1000);
    } catch (err) {
      setError("Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <div style={{ marginBottom: "1rem" }}>
        <label>Account Type</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      )}
      <Button type="submit" fullWidth disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        Already have an account? <Link href="/login">Login</Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
