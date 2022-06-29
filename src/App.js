import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";
import ModalFilter from "./ModalFilter";
import Nav from "./Nav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleToggleClick = () => {
    setIsClick(!isClick)
  }

  const handleToggleModal = () => {
    setIsModal(!isModal)
  }
  console.log(isModal);
  return (
    <div>

      <div className="sticky top-0 bg-[#fafafa] w-full h-[143px] z-50">
        <Header toggle={handleToggle} />
        <Nav isOpen={isOpen} />
        <Filter toggle={handleToggleModal} />
      </div>

      <Main />
      <Footer toggle={handleToggleClick} isClick={isClick} />
      <ModalFilter toggle={handleToggleModal} isModal={isModal} />
    </div>
  );
}

export default App;
