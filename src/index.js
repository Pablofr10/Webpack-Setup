import { render } from "react-dom";
import "./styles/index.scss";

render(<h1>Hello, React</h1>, document.getElementById("root"));

const elvenShieldRecipe = {
  leatherStripes: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntlestsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntlestsRecipe);
