export default function Instructions() {
  return(
  <>
    <div className="instructions p-2">
        <h2 className="outfit font-semibold text-ingredients text-2xl py-2">Instructions</h2>
        <ol>
          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Beat the eggs:
              </span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </p>
          </li>

          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Heat the pan:
              </span> Place a non-stick frying pan over medium heat and add butter or oil.
            </p>
          </li>

          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Cook the omelette: 
              </span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
    
          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Add fillings(optional):
              </span> When the eggs begin to set at the edges but are still slightly, runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </p>
          </li>

          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Fold and serve: 
              </span> As the omelette continues to cook carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </p>
          </li>

          <li className="list-decimal text-xs text-ingredients">
            <p className="text-xs p-0.5 text-MarronClaro">
              <span className="font-bold">
                Enjoy:
              </span> Serve hot, with additional salt and pepper if needed.
            </p>
          </li>
        </ol>
      </div>
  </>
  );
}