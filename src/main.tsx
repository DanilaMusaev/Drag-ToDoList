import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { ResetStyles } from './styles/ResetStyles.ts'
import { GlobalStyle } from './styles/GlobalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyle />
    <App />
  </ThemeProvider>

)
