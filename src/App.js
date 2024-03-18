import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Component/home';
import Layout from './Component/layout';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
    
          <Route index element={< Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
