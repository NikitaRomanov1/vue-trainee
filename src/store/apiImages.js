import { defineStore } from "pinia";
import { apiNames } from "../types";
import getRickAndMortyCharacters from "../api/getRickAndMortyCharacters";

export const useApiImagesStore = defineStore("apiImages", {
  state: () => ({
    data: [],
  }),
  actions: {
    async getNewCharacters(apiName, elements = 12) {
      const check = this.data.find(
        (obj) => obj.name === apiName && obj.images.length === Number(elements)
      );
      if (check) return check.images;
      else {
        let response = [];
        switch (apiName) {
          case apiNames.rick:
            response = await getRickAndMortyCharacters(elements);
        }

        this.data.push({ name: apiName, images: response });
        return response;
      }
    },
  },
});
