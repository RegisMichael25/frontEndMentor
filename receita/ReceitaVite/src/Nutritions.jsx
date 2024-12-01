export default function Nutritions() {
  return(
    <>
      <div className="nutrition ">
        <h2 className="outfit font-bold text-ingredients text-2xl py-2">Nutrition</h2>
        <p className="text-xs py-2 text-MarronClaro font-semibold">The table below shows nutritional values per serving without the additional fillings.</p>

        <div className="itens">

          <div className="grid grid-cols-2">
            <p className="text-xs py-2 text-MarronClaro font-semibold">Calories</p> <p className="text-ingredients text-xs font-bold">277kcal</p>
          </div>

          <hr />

          <div className="grid grid-cols-2">
            <p className="text-xs py-2 text-MarronClaro font-semibold">Carbs</p> <p className="text-ingredients text-xs font-bold">0g</p>
          </div>

          <hr />

          <div className="grid grid-cols-2">
            <p className="text-xs py-2 text-MarronClaro font-semibold">Protein</p> <p className="text-ingredients text-xs font-bold">20g</p>
          </div>

          <hr />

          <div className="grid grid-cols-2">
            <p className="text-xs py-2 text-MarronClaro font-semibold">Fat</p> <p className="text-ingredients text-xs font-bold">22g</p>
          </div>

        </div>
      </div>
    </>
  );
}