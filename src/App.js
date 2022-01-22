import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path=":category" element={<Category />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
