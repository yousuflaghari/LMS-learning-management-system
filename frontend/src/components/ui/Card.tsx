import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  `}
`;

export default Card;
