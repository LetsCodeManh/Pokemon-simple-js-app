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
  {
    index: "#999",
    name: "XXX",
    height: "-1",
    type: ["grass", "poison"],
    weaknesses: ["fire", "psychic", "flying", "ice"],
  },
];


// Using forEach instead of for
pokemonList.forEach((pokemon) => {
  document.write(
    "<p>" + pokemon.name + " " + pokemon.height + "</p>"
  );
})

// Write a pokemonList in JS - name + height
// for (i = 0; i < pokemonList.length; i++) {
//   document.write(
//     "<p>" + pokemonList[i].name + " " + pokemonList[i].height + "</p>"
//   );
//   console.log(`${pokemonList[i].name} ${pokemonList[i].height}`);
// }

// Write a pokemonList in JS and checking the height of the pokemon- name + height
// for (i = 0; i < pokemonList.length; i++) {
//   if (parseFloat(pokemonList[i].height) >= 6) {
//     document.write(
//       "<p>" + pokemonList[i].name + " " + pokemonList[i].height + " - Wow, that is a big one" + "</p>"
//     );
//     console.log(
//       `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a big one`
//     );
//   } else if (parseFloat(pokemonList[i].height) >= 3) {
//     document.write(
//       "<p>" + pokemonList[i].name + " " + pokemonList[i].height + " - Wow, that is a normal one" + "</p>"
//     );
//     console.log(
//       `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a normal one`
//     );
//   } else if (parseFloat(pokemonList[i].height) >= 0) {
//     document.write(
//       "<p>" + pokemonList[i].name + " " + pokemonList[i].height + " - Wow, that is a small one" + "</p>"
//     );
//     console.log(
//       `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a small one`
//     );
//   } else {
//     console.log("This Pokemon height doesnt exits");
//   }
// }
