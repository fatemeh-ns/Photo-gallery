import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [filteredImages, setFilteredImages] = useState([]);

  return (
    <>
      <Header setFilteredImages={setFilteredImages} />
      <Main filteredImages={filteredImages} />
      <Footer />
    </>
  );
}

export default App;
