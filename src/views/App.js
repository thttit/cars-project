import logo from './logo.svg';
import './App.scss';
import Demo2 from './Example/Demo2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Simple TODO Apps with React.js (Thy Gạo)</h3> <br />
        {/* <Demo/> */}
        <Demo2/>
        {/* <AddComponent2/> */}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
