let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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

    let listButton = document.createElement("button");
    listButton.classList.add("list-group-item");
    listButton.getAttribute("type", "button");
    listButton.getAttribute("data-toggle", "modal");
    pokemonHtmlList.getAttribute("data-target", "#exampleModal");
    listButton.innerText = pokemon.name;

    pokemonHtmlList.appendChild(listButton);

    listButton.addEventListener("click", (e) => {
      showDetails(pokemon);
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
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    let pokemonHeader = document.querySelector(".modal-title");
    pokemonHeader.innerText = pokemon.name;

    let pokemonBody = document.querySelector(".modal-body");
    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokemon.imgFrontUrl);
    pokemonBody.appendChild(pokemonImage);

    let pokemonHeight = document.createElement("p");
    pokemonHeight.innerText = "height: " + pokemon.height;
    pokemonBody.appendChild(pokemonHeight);

    let pokemonWeight = document.createElement("p");
    pokemonWeight.innerText = "weight: " + pokemon.weight;
    pokemonBody.appendChild(pokemonWeight);
  }

  // Return Everything necesarry
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Using forEach instead of for
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
