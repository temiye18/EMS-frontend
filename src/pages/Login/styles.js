import styled from "styled-components";
import { Employee2 } from "assets/images";

const LoginSection = styled.section`
  display: flex;

  .form--container {
    flex: 1;
    padding: 0 3rem;

    img {
      display: flex;
      margin: 0 auto;
    }

    button {
      display: block;
      width: 100%;
      text-align: center;

      font-weight: 500;
      border: 3px solid transparent;
      border-radius: 1rem;
      transition: border-color 0.3s ease-in-out;

      &:hover,
      &:focus {
        border-color: white;
      }
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
    gap: 4rem;

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
  }

  .banner {
    background-image: url(${Employee2});
    background-size: cover;
    background-position: center;
    border-radius: 5rem 0 0 0;
    flex: 1;
    width: 400px;
    height: 100vh;
    position: relative;

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
      bottom: 4rem;
      left: 2rem;
      transform: translateY(-30%);
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`;

export default LoginSection;
