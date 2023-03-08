import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,   Routes,
  Route, Navigate, HashRouter} from "react-router-dom";
import './Scss/Main.scss';
import '../node_modules/bootstrap/dist/js/bootstrap'
import Home from './Pages/Home';
import About from './Pages/About';
import Accommodation from './Pages/Accommodation';
import NotFound from './Pages/NotFound'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Accommodation" element={<Accommodation />} />
          <Route path="/404" element={<Navigate to={<NotFound/>}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
