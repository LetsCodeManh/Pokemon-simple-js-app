let pokemonList = [
  {
    index: "#001",
    name: "Bulbasaur",
    height: "2' 04\"",
    type: ["grass", "poison"],
    weaknesses: ["fire", "psychic", "flying", "ice"],
  },
  {
    index: "#002",
    name: "Ivysaur",
    height: "3' 03\"",
    type: ["grass", "poison"],
    weaknesses: ["fire", "psychic", "flying", "ice"],
  },
  {
    index: "#003",
    name: "Venusaur",
    height: "6' 07\"",
    type: ["grass", "poison"],
    weaknesses: ["fire", "psychic", "flying", "ice"],
  },
];

// Write a pokemonList in JS - name + height
for (i = 0; i < pokemonList.length; i++) {
  document.write(`${pokemonList[i].name} ${pokemonList[i].height}`);
  console.log(`${pokemonList[i].name} ${pokemonList[i].height}`);
}
