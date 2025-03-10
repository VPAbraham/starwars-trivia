export const getChars = (charUrls) => { 
  const characterSubset = charUrls.slice(0, 10)
  const characterSets = characterSubset.map(url => {
    return fetch(url)
    .then(response => response.json())
      .then(character => { 
      const { name, homeworld, films, species }  = character;
      return getHomeworld(homeworld)
      .then(homeworld => ({name, homeworld, films, species}))
    })
      .then(character => {
      const { name, homeworld, films, species } = character;
      return getFilms(films)
        .then(films => ({ name, homeworld, films, species }))
    })
    .then(character => {
      const { name, homeworld, films, species } = character;
      if (species.length > 0) {
        return getSpecies(species)
          .then(species => ({ name, homeworld, films, species }))
      } else {
        return ({ name, homeworld, films, species: 'unknown' })
      }
    })
  });
  return Promise.all(characterSets)
}

const getFilms = (films) => {
  const filmData = films.map(film => {
    return fetch(film)
      .then(response => response.json())
      .then(film => {
      const { title } = film
      return title
    })
  })
  return Promise.all(filmData)
}

const getSpecies = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(species => {
      const { name } = species;
      return name;
    })
}

const getHomeworld = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(homeworld => {
    const { name, population } = homeworld
    return [name, population];
  })
}
