import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state() {
    return {
      open: false,
    };
  },
  actions: {
    toggle: function () {
      this.open = !this.open;
    },
  },
});
