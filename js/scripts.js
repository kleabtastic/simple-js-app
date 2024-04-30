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

    function addListItem(pokemon) {
        let list = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name; 
        button.classList.add('pokemon-class');
        listItem.appendChild(button);
        list.appendChild(listItem);    
        button.addEventListener('click', function (event) {
            showDetails(pokemon)
        })}

    function showDetails(pokemon) {
        console.log(pokemon)
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

pokemonRepository.add(
    { number: 6, name: 'Charizard', height: 1.7, types: ['fire', 'flying'] }
);



pokemonRepository.getAll().forEach(function(pokemon) {

    pokemonRepository.addListItem(pokemon);
});




