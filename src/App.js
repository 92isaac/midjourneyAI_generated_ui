import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context/Context';
import Home from './routes/Home';

function App() {
  const data = useGlobalContext()
  console.log(data)
  return (
    <>
    <Routes>
     <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
