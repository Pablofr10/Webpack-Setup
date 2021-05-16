import './styles/index.css'

const elvenShieldRecipe = {
  leatherStripes: 2,
  ironIngot: 1,
  refinedMoonstone: 4
}

const elvenGauntlestsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGauntlestsRecipe)
