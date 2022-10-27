let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
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

    listButton.addEventListener("click", (e) => {
      showDetails(pokemon.name);
    });
  }

  // Fetch and Catch Pokemon API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imgFrontUrl = details.sprites.front_default;
        item.imgBackUrl = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Return Everything necesarry
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

console.log(pokemonRepository.getAll());

// Using forEach instead of for
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
