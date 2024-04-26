
let pokemonList = [
    { number: 1, name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { number: 2, name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
    { number: 3, name: 'Venusaur', height: 2, types: ['grass', 'poison'] },

]

let pokemonList2 = [
    { number: 4, name: 'Charmander', height: 0.6, types: ['fire'] },
    { number: 5, name: 'Charmeleon', height: 1.1, types: ['fire'] },
    { number: 6, name: 'Charizard', height: 1.7, types: ['fire', 'flying'] }
];

function printArrayDetails(list){
list.forEach(function(list) {
    if (list.height >= 1.5) {
        document.write('<p>' + list.name + ' ' + 'height (m): ' + '' + list.height + ' - ' + "That's a big one!" + '</p>')
    } else { document.write('<p>' + list.name + ' ' + 'height (m): ' + '' + list.height) + '</p>'}
})};

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2)

