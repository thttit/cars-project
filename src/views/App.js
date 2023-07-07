import logo from './logo.svg';
import './App.scss';
import Demo2 from './Example/Demo2';
import { ToastContainer} from 'react-toastify';

import Nav from './nav/Nav.js';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h3>Simple TODO Apps with React.js (Thy Gạo)</h3> <br /> */}

          <Switch>
            <Route path="/" exact='true'>
              <Home />
            </Route>
            <Route path="/todo">
              <Demo2/>
            </Route>
            <Route path="/user" exact>
              <ListUser/>
            </Route>
            <Route path="/user/:id">
              <DetailUser/>
            </Route>
          </Switch>


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
    </BrowserRouter>
  );
}

export default App;
