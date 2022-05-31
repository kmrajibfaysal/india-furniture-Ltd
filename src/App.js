import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Product from './Components/Products/Product';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
