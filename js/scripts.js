let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1025';

    // Adds a new pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // Gets all pokemon in the list.
    function getAll() {
        return pokemonList;
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.Url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
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
        })
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.add('is-visible');
          });
        };

        document.querySelector('#pokemon-class').addEventListener('click', () => {
            showDetails()
        });

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        addListItem: addListItem,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


function showModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';



    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
}

document.querySelector('#show-modal').addEventListener('click', () => {
    showModal();
});

function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
    }
});
