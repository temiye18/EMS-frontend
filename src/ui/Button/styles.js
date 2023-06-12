import styled, { css } from "styled-components";

const StyledButton = styled.button`
  all: unset;
  ${({ theme }) => theme.fonts.Poppins};

  background-color: ${({ theme }) => theme.colors.primary_blue};

  border: none;
  padding: 1.5rem 0;
  cursor: pointer;

  ${({ $variant, theme }) =>
    $variant === "yellow" &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    `}
`;

export default StyledButton;
