let pokemonRepository = (function () {
    let pokemonList = [
        { number: 1, name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
        { number: 2, name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
        { number: 3, name: 'Venusaur', height: 2, types: ['grass', 'poison'] },
        { number: 4, name: 'Charmander', height: 0.6, types: ['fire'] },
        { number: 5, name: 'Charmeleon', height: 1.1, types: ['fire'] },
    ]

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();

pokemonRepository.add(
    { number: 6, name: 'Charizard', height: 1.7, types: ['fire', 'flying'] }
);

console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height >= 1.5) {
        document.write('<p>' + pokemon.name + ' ' + 'height (m): ' + '' + pokemon.height + ' - ' + "That's a big one!" + '</p>')
    } else { document.write('<p>' + pokemon.name + ' ' + 'height (m): ' + '' + pokemon.height) + '</p>'}
});




