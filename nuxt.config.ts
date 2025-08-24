// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
import { readdirSync, existsSync } from "fs";

// Dynamically load JSON files from i18n/locales/en and i18n/locales/ar
const enDir = "locales/en";
const arDir = "locales/ar";
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
    "@pinia/nuxt",
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US", files: enFiles },
      { code: "ar", language: "ar-AR", files: arFiles, dir: "rtl" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
  },
  imports: {
    dirs: ["stores"],
  },
});
