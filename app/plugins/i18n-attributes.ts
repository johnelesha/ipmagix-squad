import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    // Access the i18n instance from nuxtApp
    const i18n = nuxtApp.$i18n as {
        locale: { value: string };
        onLanguageSwitched?: () => void;
    };

    // Update html attributes on app mount
    nuxtApp.hook("app:mounted", () => {
        const html = document.documentElement;
        const updateHtmlAttrs = () => {
            html.setAttribute("lang", i18n.locale.value);
            html.setAttribute("dir", i18n.locale.value === "ar" ? "rtl" : "ltr");
        };

        updateHtmlAttrs();

        // Listen for locale changes
        i18n.onLanguageSwitched = () => {
            updateHtmlAttrs();
        };
    });
});