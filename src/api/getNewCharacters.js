import { apiNames } from "../types";
import getRickAndMortyCharacters from "./getRickAndMortyCharacters";

const getNewCharacters = async (apiName, elements = 12) => {
  // Перед запросом проверим, есть ли в хранилище браузера уже такие элементы по ключу
  // const storage = JSON.parse(localStorage.getItem([apiName, elements]));

  // if (storage) {
  //   return storage;
  // }
  let response = [];
  switch (apiName) {
    case apiNames.rick:
      response = await getRickAndMortyCharacters(elements);
      break;
  }
  // после получения ответа запишем в хранилище
  // localStorage.setItem([apiName, elements], JSON.stringify(response));
  return response;
};

export default getNewCharacters;
