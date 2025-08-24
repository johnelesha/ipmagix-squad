import { computed } from "vue";
import { useI18n } from "#i18n";

export function useDirection() {
    const { locale } = useI18n();
    const direction = computed(() => {
        const locales = [
            { code: "en", dir: "ltr" },
            { code: "ar", dir: "rtl" },
        ];
        return locales.find((l) => l.code === locale.value)?.dir || "ltr";
    });
    return { direction };
}
