import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Container from "./UI/container/Container"
import Navbar from "./components/Navbar/Navbar"
import "./styles/reset.css"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <AppRouter />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
