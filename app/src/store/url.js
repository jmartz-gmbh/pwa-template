import { defineStore } from "pinia";

export const useNavStore = defineStore("url", {
  state() {
    return {
      baseurl: "http://www.pwa-template.de",
    };
  },
  actions: {},
});
