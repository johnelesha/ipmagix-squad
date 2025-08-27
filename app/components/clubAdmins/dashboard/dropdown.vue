<template>
    <section class="relative my-3 inline-block ltr:text-left rtl:text-right">
        <button
            ref="dropdownButton" type="button" class="btn btn-ghost px-2 bg-white flex items-center justify-between text-sm w-50 rounded-lg"
            @click.stop="toggleDropdown">
            {{ t(`dashboard.dropdown.options.${selectedOption}`) }}
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m7 10l5 5m0 0l5-5" />
            </svg>
        </button>
        <ul
            v-show="isDropdownOpen" ref="dropdownContent"
            class="dropdown-content menu bg-base-100 rounded-box shadow z-10 w-50 p-0 absolute">
            <li v-for="option in options" :key="option">
                <button class="text-sm py-2" @click="selectOption(option)">
                    {{ t(`dashboard.dropdown.options.${option}`) }}
                </button>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from "#i18n";
import { onClickOutside } from "@vueuse/core";

const { t } = useI18n();

const isDropdownOpen = ref(false);
const selectedOption = ref("all");
const options: string[] = ['all', 'option1', 'option2', 'option3'];
const dropdownButton = ref<HTMLElement | null>(null);
const dropdownContent = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option: string) => {
    selectedOption.value = option;
    isDropdownOpen.value = false;
};

onClickOutside(dropdownContent, () => {
    if (isDropdownOpen.value) {
        isDropdownOpen.value = false;
    }
}, { ignore: [dropdownButton] });
</script>

<style scoped>
</style>
