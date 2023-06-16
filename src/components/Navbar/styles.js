import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.grey};

  height: 100%;
  position: sticky;
  top: 0;
  overflow-y: auto;
  padding: 2rem 1.75rem;
  display: grid;
  grid-template-rows: 1fr;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
  }

  ul {
    margin-top: 3.125rem;
    display: grid;
    gap: 2rem;
    font-size: 0.875rem;

    li > a {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      padding: 0.8125rem 0.75rem;
      border-radius: 10px;
      transition: background-color 0.3s ease-in-out;

      &:hover,
      &.active {
        background-color: ${({ theme }) => theme.colors.primary_blue};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 4px 4px 32px rgba(103, 90, 255, 0.07);
      }

      span {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
      }
    }
  }

  .bottom--item {
    align-self: end;
    display: grid;
    place-items: center;

    .profile {
      margin-bottom: 2rem;

      a {
        text-align: center;
        margin-top: 0.3rem;
      }

      .link {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary_dark};

        border-radius: 100%;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        aspect-ratio: 1/1;
        object-fit: cover;
        font-size: 1.25rem;
        margin: auto;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        font-weight: 500;
        border: 3px solid transparent;
        transition: border-color 0.3s ease-in-out;

        &:hover {
          border-color: white;
        }
      }
    }

    button.logout {
      all: unset;

      ${({ theme }) => theme.fonts.Poppins}
      color: ${({ theme }) => theme.colors.grey};
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      padding: 0.8125rem 0.75rem;
      border-radius: 10px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary_red};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 500;
      }

      span {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
      }
    }
  }
`;

export default NavContainer;
