import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginAdmin, Home, ProductDetail, ProductListing } from "../../pages";
const App = (props) => {
    return <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/admin" element={<LoginAdmin />} />

                <Route path='' element={<Home />} />
                <Route path="/products" element={<ProductDetail />} />
                <Route path="/collections" element={<ProductListing />} />

            </Routes>
        </BrowserRouter>
    </>
}

export default App;