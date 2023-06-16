import styled from "styled-components";

const Container = styled.div`
  padding: 1.3rem 1.5rem;

  .card--box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(258px, 100%), 1fr));
    gap: 1.875rem;

    .box--item {
      background-color: ${({ theme }) => theme.colors.primary_dark};

      box-shadow: 4px 4px 33px rgba(0, 0, 0, 0.05);
      padding: 1.4375rem 1.1875rem;
      border-radius: 15px;

      hr {
        margin: 1rem 0;
        border: none;
        height: 1px;

        background-color: ${({ theme }) => theme.colors.primary_green};
      }

      h3 {
        font-size: 1.5rem;
      }

      h5 {
        font-size: 1.2rem;

        span {
          color: ${({ theme }) => theme.colors.primary_green};
          font-size: 1.5rem;
          margin-left: 0.5rem;
        }
      }
    }
  }

  .admins--table {
    background-color: ${({ theme }) => theme.colors.primary_dark};

    padding: 1.8rem 1.12rem;
    margin-top: 1.5rem;
    border-radius: 15px;
    max-width: 100%;

    h2 {
      font-size: 2rem;
      line-height: 120%;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
    }

    table {
      margin-top: 1.5rem;
      width: 100%;
      text-align: left;
      border-collapse: collapse;
    }

    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary_green};

      &:first-child {
        border-top: 1px solid ${({ theme }) => theme.colors.primary_green};
      }
    }

    th,
    td {
      padding: 1rem;
    }

    th {
      font-size: 1.1rem;
      font-style: italic;
      font-weight: 600;
    }

    td {
      font-weight: 500;
    }
  }
`;

export default Container;
