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

// Write a pokemonList in JS - name + height
for (i = 0; i < pokemonList.length; i++) {
  document.write(
    "<p>" + pokemonList[i].name + " " + pokemonList[i].height + "</p>"
  );
  console.log(`${pokemonList[i].name} ${pokemonList[i].height}`);
}

// Write a pokemonList in JS and checking the height of the pokemon- name + height
for (i = 0; i < pokemonList.length; i++) {
  if (parseFloat(pokemonList[i].height) >= 6) {
    console.log(
      `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a big one`
    );
  } else if (parseFloat(pokemonList[i].height) >= 3) {
    console.log(
      `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a normal one`
    );
  } else if (parseFloat(pokemonList[i].height) >= 0) {
    console.log(
      `${pokemonList[i].name} ${pokemonList[i].height} - Wow, that is a small one`
    );
  } else {
    console.log("This Pokemon height doesnt exits");
  }
}
