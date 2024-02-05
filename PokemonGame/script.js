const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonHp = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack');
const pokemonDefense = document.getElementById('defense');
const pokemonSpecialAttack = document.getElementById('special-attack');
const pokemonSpeed = document.getElementById('speed');
const imageDiv = document.getElementById('sub-container');
const pokemonSpecialDefence = document.getElementById('special-defense');
const typesDiv = document.getElementById('types');

const fetchData = async (nameOrId)=>{
    try{
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
        const data = await res.json();
        return data;
    }catch(err){
        return "Invalid Pokemon"
    }
}

searchButton.addEventListener('click',async ()=>{
    let pokemonNameOrId = String(searchInput.value).toLowerCase();
    const data = await fetchData(pokemonNameOrId);
    if(data == 'Invalid Pokemon'){
        alert('Pokémon not found');
        return ;
    }
    //const {base_experience,} 
    displayData(data);
})

const displayData = ({base_experience,height,id,name,order,sprites,stats,types,weight})=>{

    //console.log(stats);
    pokemonName.textContent = `${name}`;
    pokemonID.textContent = `#${id}`;
    pokemonHeight.textContent = `Height: ${height}`;
    pokemonWeight.textContent = `Weight: ${weight}`;
    pokemonHp.textContent = `${stats[0].base_stat}`;
    pokemonAttack.textContent = `${stats[1].base_stat}`;
    pokemonDefense.textContent = `${stats[2].base_stat}`;
    pokemonSpecialAttack.textContent = `${stats[3].base_stat}`;
    pokemonSpeed.textContent = `${stats[5].base_stat}`;
    pokemonSpecialDefence.textContent = `${stats[4].base_stat}`;


    let imageDivHTML = `
    <h3 id="pokemon-name">${name}</h3><h3 id="pokemon-id">#${id}</h3>
    <h5 id="weight">Weight: ${weight}</h5><h5 id="height">Height: ${height}</h5>
    <img id="sprite" style="margin: 1vh auto 1vh auto;" src="${sprites.front_default}">`;

    let typesDivHTML = ``;

    for(let i = 0;i<types.length;i++){
        typesDivHTML += `<p>${String(types[i].type.name).toUpperCase()}</p>`;
    }

    imageDiv.innerHTML = imageDivHTML;

    typesDiv.innerHTML = typesDivHTML;

}
