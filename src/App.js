import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';

function App() {
     return (
          <>
               <div className="App">
                    <Routes>
                         <Route path='/' element={<Navbar />} />
                         <Route path='/home' element={<Home />} />
                         <Route path='/product' element={<Product />} />
                         <Route path='/about' element={<About />} />
                         <Route path='/:id' element={<Product />} />

                    </Routes>
               </div>

          </>
     );
}

export default App;
