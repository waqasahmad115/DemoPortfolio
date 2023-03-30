import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

body::-webkit-scrollbar {
    width: 1.5rem;
  }
  body::-webkit-scrollbar-track {
     background-color: rgb(24 24 29);
  }
  body::-webkit-scrollbar-thumb {
   
    background: #fff;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }
  body::-webkit-scrollbar-thumb:hover {
   
    background-image: linear-gradient(#090979, #00d4ff);
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }
`
