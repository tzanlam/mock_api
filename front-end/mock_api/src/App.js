import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';import router from "./Routers/index"
import FooterPage from './pages/FooterPage';
function App() {
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}/>
    <FooterPage/>
    </>
  );
}

export default App;
