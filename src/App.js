import { ContextProvider } from "./context";
import AppRoutes from "./routes";

function App() {
  return (
    <ContextProvider>
      <AppRoutes/>
    </ContextProvider>
  )
}

export default App;
