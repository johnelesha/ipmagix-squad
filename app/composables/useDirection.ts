import { computed } from "vue";
import type { ComputedRef } from "vue";
import { useI18n } from "#i18n";

interface Locale {
    code: string;
    dir: "ltr" | "rtl";
}

interface UseDirectionReturn {
    direction: ComputedRef<"ltr" | "rtl">;
}

export function useDirection(): UseDirectionReturn {
    const { locale } = useI18n();
    const direction = computed((): "ltr" | "rtl" => {
        const locales: Locale[] = [
            { code: "en", dir: "ltr" },
            { code: "ar", dir: "rtl" },
        ];
        return locales.find((l) => l.code === locale.value)?.dir || "ltr";
    });
    return { direction };
}