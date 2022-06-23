import { SocketProvider } from "./context/socketContext"
import HomePage from "./pages/HomePage"


const App = () => {
  return (
    <SocketProvider>
      <HomePage/>
    </SocketProvider>
  )
}

export default App