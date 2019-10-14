export const getChars = (charUrls) => { 
  const characterSets = charUrls.map(url => {
    return fetch(url)
    .then(response => response.json())
    .then(character => ({ 
      name: character.name, 
      films: getDataChar(character, 'films', 'title'), 
      species: getDataChar(character, 'species', 'name'),
      homeworld: getHomeworld(character)
    }))
    .then(character => character)
  });
  return Promise.all(characterSets)
}

export const getDataChar = (character, property, metric) => {
  return Promise.all(character[property].map(url => {
    return fetch(url)
    .then(response => response.json())
  }))
}

export const getHomeworld = (character) => {
  return fetch(character.homeworld)
  .then(response => response.json())
  .then(homeworld => homeworld.name)
}
