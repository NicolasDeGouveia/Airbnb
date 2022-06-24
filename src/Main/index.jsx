import Card from "../Card";

export default function Main() {
  return (
    <div className="w-full h-screen px-20">
      <div>
        <p className="mb-6">Classement par ordre de pertinence</p>
      </div>
      <div className="w-full mx-auto grid grid-cols-4 gap-3 ">
        <Card />
      </div>
    </div>
  );
}
