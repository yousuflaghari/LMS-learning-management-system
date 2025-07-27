import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
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
  border: none;
  font-family: inherit;
  font-size: ${({ size }) => (size === "sm" ? "0.875rem" : "1rem")};

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
        background: ${theme.colors.danger};
        color: white;
        
        &:hover {
          background: ${theme.colors.danger}dd;
        }
      `;
    }

    if (variant === "secondary") {
      return `
        background: ${theme.colors.textSecondary};
        color: white;
        
        &:hover {
          background: ${theme.colors.textTertiary};
        }
      `;
    }

    return `
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

export default Button;
