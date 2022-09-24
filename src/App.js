import logo from "./logo.svg";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TranslateBox />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
