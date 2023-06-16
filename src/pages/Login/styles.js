import styled from "styled-components";
import { Employee2 } from "assets/images";

const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow-y: auto;

  .form--container {
    padding: 0 3rem;
    width: 100%;
    margin: auto;

    img {
      display: flex;
      margin: 0 auto;
    }

    button {
      display: block;
      width: 100%;
      text-align: center;

      font-weight: 500;
    }

    .employee--btn,
    .admin--btn {
      margin-top: 3.5rem;
    }
  }

  .dialogue--box {
    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  form {
    display: grid;
    gap: 2.8rem;

    .header {
      button {
        width: max-content;
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

    p.error--text {
      color: ${({ theme }) => theme.colors.primary_red};
    }

    & > div {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 500;
        font-size: 1.3rem;
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
        padding: 1.5rem 0 0;
        border-bottom: 2px solid white;
      }
    }

    button.login {
      margin-bottom: 2rem;
    }
  }

  .banner {
    align-self: stretch;
    position: relative;
    background-image: url(${Employee2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5rem 0 0 0;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      );
    }

    p {
      position: absolute;
      top: 70%;
      left: 2rem;
      transform: translateY(-50%);
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`;

export default LoginSection;
