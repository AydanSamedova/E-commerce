
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import Copyright from "./companents/Copyright";
import Categories from "./companents/Categories";
import Product from "./pages/Product";
import Main from "./pages/Main";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/product/:id" exact element={<Product />}></Route>
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
