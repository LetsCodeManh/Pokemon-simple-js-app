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

