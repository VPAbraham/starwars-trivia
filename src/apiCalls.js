export const getChars = (charUrls) => {
  let charactersForMovie = []
  charUrls.map(url =>
    fetch(url)
    .then(results => results.json())
    .then(results => charactersForMovie.push(results))
    )
  console.log(charactersForMovie)
  return charactersForMovie  
}