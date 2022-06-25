import Card from "./Card";
import Filter from "./Filter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Footer />
      <Main card={<Card />} />

    </div>
  );
}

export default App;
