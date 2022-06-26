import Card from "./Card";
import Filter from "./Filter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div>
      <div className="sticky top-0 bg-[#fafafa] w-full h-[143px]">
        <Header />
        <Filter />
      </div>
      <Footer />
      <Main card={<Card />} />

    </div>
  );
}

export default App;
