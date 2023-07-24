import { defineStore } from "pinia";

export const useStore = defineStore("piniaStore", {
  state: () => ({
    showLoading: false
  }),
  getters: {

  },
  actions: {
    setShowLoading(payload: boolean) {
      this.showLoading = payload;
    }
  }
});