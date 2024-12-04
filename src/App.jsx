import Contact from "./pages/contact";
import HomePage from "./pages/homepage";
import Imprint from "./pages/Imprint";
import News from "./pages/news";
import Works from "./pages/works";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/works" element={<Works />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
