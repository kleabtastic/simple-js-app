
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
for (let i = 0; i < list.length; i++) {
    if (list[i].height >= 1.5) {
        document.write('<p>' + list[i].name + ' ' + 'height (m): ' + '' + list[i].height + ' - ' + "That's a big one!" + '</p>')
    } else { document.write('<p>' + list[i].name + ' ' + 'height (m): ' + '' + list[i].height) + '</p>'}
}
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2)

let x = 5;

function foo(){
  let y = 10;
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
console.log("From outside foo(): y = " + y);