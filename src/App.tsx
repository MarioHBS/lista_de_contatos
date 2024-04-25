import GlobalStyle, { GlobalContainer } from './global_style'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        <HomePage />
      </GlobalContainer>
    </>
  )
}

export default App
