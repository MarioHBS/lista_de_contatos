import { ThemeProvider } from 'styled-components'

import GlobalStyle, { GlobalContainer } from './styles/global'
import HomePage from './pages/HomePage'
import lightTheme from './themes/light'
import NewContactPage from './pages/NewContactPage'

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <GlobalContainer>
          <NewContactPage />
        </GlobalContainer>
      </ThemeProvider>
    </>
  )
}

export default App
