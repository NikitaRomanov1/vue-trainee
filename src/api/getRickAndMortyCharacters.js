const getRickAndMortyCharacters = async (el = 12) => {
  let dataRick = [];
  const requestArray = [...Array(el + 1).keys()].slice(1);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${requestArray}`
  );
  const data = await response.json();

  for (const item of data) {
    const el = {
      id: item.id,
      name: item.name,
      url: item.url,
    };
    dataRick.push(el);
  }
  return dataRick;
};

export default getRickAndMortyCharacters;
