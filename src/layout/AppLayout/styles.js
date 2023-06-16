import styled from "styled-components";

const MainPage = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: min(256px, 100%) 1fr;
  height: 100vh;

  section {
    background-color: ${({ theme }) => theme.colors.primary_light};
    height: 100%;
    overflow-y: auto;

    h1.title {
      background-color: ${({ theme }) => theme.colors.primary_dark};

      font-size: 2rem;
      text-align: center;
      padding: 2rem 0;
      box-shadow: 4px 4px 33px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 10;
    }
  }
`;

export default MainPage;
