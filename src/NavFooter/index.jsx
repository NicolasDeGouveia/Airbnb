import { navOne, navTwo, navThree, navFour } from "../data/navFooter";

export default function NavFooter() {
  return (
    <div className="px-6 py-8  bg-gray-100 border-t border-gray-200">
      <section className="pb-6 mb-6 border-b border-gray-200">
        <h1 className="font-poppins font-bold text-sm">Assistance</h1>
        <ul>
          {navOne.map((item) => (
            <li key={item.id} className="mt-3">
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-6 mb-6 border-b border-gray-200">
        <h1 className="font-poppins font-bold text-sm">Communauté</h1>
        <ul>
          {navTwo.map((item) => (
            <li key={item.id} className="mt-3">
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-6 mb-6 border-b border-gray-200">
        <h1 className="font-poppins font-bold text-sm">Accueil de voyageurs</h1>
        <ul>
          {navThree.map((item) => (
            <li key={item.id} className="mt-3">
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-6 mb-6 border-b border-gray-200">
        <h1 className="font-poppins font-bold text-sm">À propos</h1>
        <ul>
          {navFour.map((item) => (
            <li key={item.id} className="mt-3">
              {item.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
