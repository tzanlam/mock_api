import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';import router from "./Routers/index"
function App() {
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
