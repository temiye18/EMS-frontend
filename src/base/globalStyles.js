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

   overflow-y: hidden;
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

   h1, h2, h3, h4, h5 , h6 {
      font-weight: 700;
   }
  .toast--container {
      width: max-content !important;
      max-width: calc(100% - 30px);
      font-size: 0.9rem;
   }
   .toast--container > div {
      min-height: 52px;
   }
   .toast--container .Toastify__toast-icon {
      margin-inline-end: 6px;
   }
   .toast--container .Toastify__toast-icon svg {
      width: 17px;
   }
  @media(max-width: 480px) {
.Toastify__toast-container {
		width: 100% !important;
	}
  }
	

  
  
`;

export default GlobalStyles;
