let pokemonRepository = (function () {
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      Object.keys(pokemon) === Object.keys(pokemonList[0])
    ) {
      pokemonList.push(pokemon);
    } else {
      return "This is not an object, please add an object in the List!";
    }
  }

  // function pokemonSearch(arr, query) {
  //   return arr.filter(pokemon => {
  //     pokemon.toLowerCase().includes(query.toLowerCase())
  //   })
  // }

  return {
    getAll: getAll,
    add: add,
  };
})();

console.log(pokemonRepository.getAll());

// Using forEach instead of for
pokemonRepository.getAll().forEach((pokemon) => {
  document.write("<p>" + pokemon.name + " " + pokemon.height + "</p>");
});

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
