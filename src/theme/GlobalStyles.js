import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ##3D3D3D;
    font-family: 'Rubik', sans-serif;
  }
  a {
    color: ##3D3D3D;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 1.5em;
    }
  }
  @media (min-width: 576px) {
    h1 {
      font-size: 4em;
    }
    h3 {
      font-size: 2em;
    }
  }
  p, h4 {
    font-weight: 400;
    font-size: 1.125rem;
  }
  h1, h2, h3 {
    font-weight: 500;
  }
  h4, .modal-link {
    color: #A3A3A3;
  }
  .modal-link {
    text-decoration: underline;
  }
`

export default GlobalStyle
