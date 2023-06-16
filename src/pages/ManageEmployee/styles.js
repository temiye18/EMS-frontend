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

  .add--btn {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.12rem;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary_green};
    width: max-content;
    text-align: center;

    border: 3px solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover,
    &:focus {
      border-color: white;
    }
  }

  .table--container {
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

    td.image {
      img {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 100%;
        object-fit: cover;
      }
    }
    .action--btn {
      display: flex;
      gap: 0.3rem;
      align-items: center;

      button {
        padding: 0.5rem 0.8rem;
        border-width: 2px;
        border-radius: 10px;
      }
    }
  }
`;

export default Container;
