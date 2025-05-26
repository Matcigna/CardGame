import CardGrid from "./components/CardGrid"
import { ArrayCardContextProvider } from "./contexts/PlayerContext"

function App() {

  return (
    <ArrayCardContextProvider>
      <CardGrid/>
    </ArrayCardContextProvider>
  )
}

export default App
