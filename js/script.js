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

  // Creating a list of pokemons in HTML
  function addListItem(pokemon) {
    let pokemonHtmlList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let listButton = document.createElement("button");

    listButton.innerText = pokemon.name;
    listItem.appendChild(listButton);
    pokemonHtmlList.appendChild(listItem);

    listButton.addEventListener("click", e => {
      showDetails(pokemon.name)
    })
  };

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  // Return Everything necesarry
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

console.log(pokemonRepository.getAll());

// Using forEach instead of for
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
