export default function Main({ card }) {
  return (
    <div className="w-full h-full px-20 mt-6">
      <div>
        <p className="mb-6">Classement par ordre de pertinence</p>
      </div>
      <div className="w-full h-max-[900px] mx-auto pt-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {card}
      </div>
    </div>
  );
}
