import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context/Context';
import './App.css';
import Footer from './component/footer/Footer';
import ProductDetails from './component/products/ProductDetails';
import Spinner from './data/Spinner';
const Home = lazy(()=>(import('./routes/Home')))
const Product = lazy(()=>(import('./routes/Product')));
const Cart = lazy(()=>(import('./routes/Cart')));
const Nomatch = lazy(()=>(import('./component/nomatch/Nomatch')));

function App() {
  const data = useGlobalContext()
  console.log(data)
  return (
    <>
    <Suspense fallback={<Spinner />}>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/products' element={<Product />}/>
     <Route path='/products/:id' element={<ProductDetails />}/>
     <Route path='/cart' element={<Cart />}/>
     <Route path='*' element={<Nomatch />} />
    </Routes>
    </Suspense>
    <Footer />
    </>
  );
}

export default App;
