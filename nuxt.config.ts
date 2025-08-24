// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
import { readdirSync, existsSync } from "fs";

// Dynamically load JSON files from i18n/locales/en and i18n/locales/ar
const enDir = "i18n/locales/en";
const arDir = "i18n/locales/ar";
const enFiles = existsSync(enDir)
  ? readdirSync(enDir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => `en/${file}`)
  : [];
const arFiles = existsSync(arDir)
  ? readdirSync(arDir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => `ar/${file}`)
  : [];

/* console.log("English locale files:", enFiles);
console.log("Arabic locale files:", arFiles); */

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        files: enFiles,
        dir: "ltr",
      },
      {
        code: "ar",
        language: "ar-AR",
        name: "Arabic",
        files: arFiles,
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    langDir: "locales/",
  },
});
