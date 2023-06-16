import styled, { css } from "styled-components";

const StyledButton = styled.button`
  all: unset;
  ${({ theme }) => theme.fonts.Poppins};

  background-color: ${({ theme }) => theme.colors.primary_blue};

  border: none;
  padding: 1.5rem 0;
  cursor: pointer;
  border-radius: 1rem;

  border: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: white;
  }

  ${({ $variant, theme }) =>
    $variant === "yellow" &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary_dark};
    `}

  ${({ $variant, theme }) =>
    $variant === "danger" &&
    css`
      background-color: ${theme.colors.primary_red};
      color: ${theme.colors.white};
    `}
`;

export default StyledButton;
