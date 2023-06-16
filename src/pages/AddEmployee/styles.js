import styled from "styled-components";

const Container = styled.div`
  padding: 1.3rem 1.5rem;

  .header {
    display: flex;
    align-items: center;

    button {
      border-radius: 100%;
      padding: 1rem;
      aspect-ratio: 1/1;
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }
  }

  form {
    background-color: ${({ theme }) => theme.colors.primary_dark};

    border-radius: 15px;
    margin-top: 1.5rem;
    padding: 1.8rem 2.5rem;
    max-width: 100%;
    display: grid;
    gap: 2.5rem;

    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 2rem;
      text-align: center;
    }

    & > div {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 500;
        font-size: 1.125rem;
      }

      &.password {
        position: relative;

        .eye {
          font-size: 1.3rem;
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-10%);
          z-index: 10;
          cursor: pointer;
        }
      }

      input {
        ${({ theme }) => theme.fonts.Poppins};

        color: ${({ theme }) => theme.colors.white};

        background: transparent;
        border: none;
        outline: none;
        padding: 1.2rem 0 0.5rem;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary_blue};
      }

      &.image {
        p {
          margin-top: 0.5rem;
        }
        input[type="file"] {
          /* Hide the default file input appearance */
          opacity: 0;
          position: absolute;
          z-index: -1;
        }

        .custom--file--input {
          /* Add custom styles to create a visually appealing file input */
          display: inline-block;
          padding: 0.7rem;
          width: max-content;
          font-size: 0.875rem;
          font-weight: 599;
          color: ${({ theme }) => theme.colors.primary_dark};
          background-color: ${({ theme }) => theme.colors.secondary};
          border: none;
          border-radius: 4px;
          cursor: pointer;

          border: 2px solid transparent;
          transition: border-color 0.3s ease-in-out;

          &:hover,
          &:focus {
            border-color: white;
          }
        }
      }
    }

    button {
      border-radius: 10px;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary_green};
      text-align: center;
    }
  }
`;

export default Container;
