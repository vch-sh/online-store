import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ContextProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='store' element={<Store />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </ContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;