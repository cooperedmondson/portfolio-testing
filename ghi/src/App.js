import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <>
      <Landing />
      <About />
    </>
  );
}

export default App;
