import styled from "styled-components";

const Container = styled.div`
  padding: 1.3rem 1.5rem;

  .user--card {
    width: 600px;
    max-width: 100%;
    margin: 2rem auto;

    background-color: ${({ theme }) => theme.colors.primary_dark};
    border: 3px solid ${({ theme }) => theme.colors.primary_blue};
    border-radius: 15px;
    position: relative;

    .header {
      min-height: 120px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    img {
      width: 150px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border: 8px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      position: absolute;
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .body {
      padding: 2rem;
      margin-top: 2.5rem;
      text-align: center;
      display: grid;
      gap: 1.5rem;

      h2 {
        margin-top: 1.2rem;
        font-size: 2rem;
      }

      p {
        span {
          font-weight: 600;
          font-size: 1.2rem;
          /* margin-right: 1.2rem; */
        }
      }
    }
  }
`;

export default Container;
