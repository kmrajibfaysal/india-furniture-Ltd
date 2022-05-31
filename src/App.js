import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/login" element={<Product />} />
            </Routes>
        </div>
    );
}

export default App;
