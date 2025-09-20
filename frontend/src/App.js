import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import CategoryBar from "./components/Header/CategoryBar.js"
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login";
import GoogleCallback from "./components/Login/GoogleCallback.js";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer/Footer.js";
import Product from "./components/Products/ProductView.js"
import PostAdCard from "./components/Categories/PostAdCard.js"

function App() {
  return (
    <>
      <Header />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/post-ad" element={<PostAdCard />} />
      </Routes> 
      <Footer/> 
    </>
  );
}

export default App;
