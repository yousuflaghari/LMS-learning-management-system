import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  width: 100%;
  background: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button<{
  variant?: "primary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ size }) =>
    size === "sm"
      ? "0.5rem 1rem"
      : size === "lg"
      ? "1rem 2rem"
      : "0.75rem 1.5rem"};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ variant, theme }) => {
    if (variant === "outline") {
      return `
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        background: transparent;
        
        &:hover {
          background: ${theme.colors.primary}10;
        }
      `;
    }

    if (variant === "danger") {
      return `
        border: none;
        background: ${theme.colors.danger};
        color: white;
        
        &:hover {
          background: ${theme.colors.danger}dd;
        }
      `;
    }

    return `
      border: none;
      background: ${theme.colors.primary};
      color: white;
      
      &:hover {
        background: ${theme.colors.primaryDark};
      }
    `;
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Extend Input to support textarea
Input.defaultProps = {
  as: "input",
};
