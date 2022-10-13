const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 150;
let offset = 1;

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
            spinner.style.display = "none";
        });
}

function fetchPokemons(offset, limit) {
    spinner.style.display = "block";
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const type = document.createElement("p");
    type.classList.add("type");
    type.textContent = pokemon.types[0].type.name;

    const type2 = document.createElement("p");
    type2.classList.add("type");
    type2.textContent = pokemon.types[1]?.type.name;

    const colors = {
        fire: '#FFA05D',
        grass: '#8FD594',
        electric: '#FFE43B',
        water: '#7E97C0',
        ground: '#CAAC4D',
        rock: '#90642D',
        poison: '#9D5B9B',
        bug: '#EAFD71',
        dragon: '#97b3e6',
        psychic: '#FF96B5',
        flying: '#CDCDCD',
        fighting: '#FF5D5D',
        fairy:  '#CBC3E3',
        normal: '#FFFFFF',
        ghost: '#A020F0',
        dark: '#63666A',
        steel: '#B8B8D0',
        ice: '#BCE6E6'
    }

    const mainTypes = Object.keys(colors);

    const color = mainTypes.find(type => pokemon.types[0].type.name === type);

    card.style.backgroundColor = colors[color];

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(type2);

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    cardBack.appendChild(progressBars(pokemon.stats));

    cardBack.style.backgroundColor = colors[color];

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);

    flipCard.classList.add("m-2");

    pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    for (let i = 0; i < 3; i++) {
        const stat = stats[i];

        const statPercent = stat.base_stat / 2 + "%";
        const statContainer = document.createElement("stat-container");
        statContainer.classList.add("stat-container");

        const statName = document.createElement("p");
        statName.textContent = stat.stat.name;

        const progress = document.createElement("div");
        progress.classList.add("progress");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.setAttribute("aria-valuenow", stat.base_stat);
        progressBar.setAttribute("aria-valuemin", 0);
        progressBar.setAttribute("aria-valuemax", 200);
        progressBar.style.width = statPercent;

        progressBar.textContent = stat.base_stat;

        progress.appendChild(progressBar);
        statContainer.appendChild(statName);
        statContainer.appendChild(progress);

        statsContainer.appendChild(statContainer);
    }

    return statsContainer;
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let gen1 = document.getElementById("btnradio1").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 0;
    limit = 151;
    fetchPokemons(offset, limit);
});

let gen2 = document.getElementById("btnradio2").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 152;
    limit = 99;
    fetchPokemons(offset, limit);
});

let gen3 = document.getElementById("btnradio3").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 252;
    limit = 134;
    fetchPokemons(offset, limit);
});

let gen4 = document.getElementById("btnradio4").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 387;
    limit = 106;
    fetchPokemons(offset, limit);
});

let gen5 = document.getElementById("btnradio5").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 494;
    limit = 155;
    fetchPokemons(offset, limit);
});

let gen6 = document.getElementById("btnradio6").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 650;
    limit = 71;
    fetchPokemons(offset, limit);
});

let gen7 = document.getElementById("btnradio7").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 722;
    limit = 87;
    fetchPokemons(offset, limit);
});

let gen8 = document.getElementById("btnradio8").addEventListener("click", e => {
    removeChildNodes(pokemonContainer);
    offset = 810;
    limit = 88;
    fetchPokemons(offset, limit);
});

let defaultGeneration = fetchPokemons(0, 151);