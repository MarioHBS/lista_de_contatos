import { ThemeProvider } from 'styled-components'

import GlobalStyle, { GlobalContainer } from './global_style'
import HomePage from './pages/HomePage'
import lightTheme from './themes/light'

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <GlobalContainer>
          <HomePage />
        </GlobalContainer>
      </ThemeProvider>
    </>
  )
}

export default App
