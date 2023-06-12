import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   html,
   html *,
   html *::before,
   html *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }
   html {
      scroll-behavior: smooth;
   }
   body {
    ${({ theme }) => theme.fonts.Poppins};
   
    color: ${({ theme }) => theme.colors.white};

   
      font-size: 16px;
      font-weight: 400;
      overflow-x: hidden;
      height: 100dvh;
      background-color: ${({ theme }) => theme.colors.primary_dark};
   }

   ul {
      list-style: none;
   }
  
   a {
      text-decoration: none;
      color: inherit;
   }
  

  
  
`;

export default GlobalStyles;
