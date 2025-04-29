import { defineStore } from "pinia";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: ["../assets/image1.jpg", "../assets/image2.jpg", "../assets/image3.jpg"],
  }),
});
