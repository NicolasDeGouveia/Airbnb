import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen);
  return (
    <div>
      <div className="sticky top-0 bg-[#fafafa] w-full h-[143px] z-50">
        <Header toggle={handleToggle} />
        <Nav isOpen={isOpen} />
        <Filter />
      </div>
      <Footer />
      <Main card={<Card />} />

    </div>
  );
}

export default App;
