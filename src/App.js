import { ContextProvider } from "./context";
import AppRoutes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <ContextProvider>
      <ToastContainer autoClose={3000} />
      <AppRoutes/>
    </ContextProvider>
  )
}

export default App;
