<template>
    <nav class="navbar border-b-[0.3px] border-[#C5C5C5] p-0 py-5" :dir="direction">
        <div class="flex flex-col sm:flex-row justify-end w-full md:px-11 px-6 gap-3">
            <div class="relative w-72 mx-auto sm:mx-0 mb-3 sm:mb-0 content-center bg-[#F9FAFB] text-[#CCCCCC]">
                <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                    </svg>
                </span>
                <input
                    type="text" :placeholder="$t('navbar.searchInput')"
                    class="w-full ltr:pl-11 rtl:pr-11 py-2 rounded-lg text-sm text-gray-700 placeholder-[#CCCCCC] focus:outline-none focus:ring-1" >
            </div>

            <div class="flex items-center justify-center sm:justify-end gap-3">
                <div
                    class="dropdown ltr:dropdown-start rtl:dropdown-end ltr:sm:dropdown-center rtl:sm:dropdown-center content-center mx-2">
                    <button ref="notificationButton" type="button" class="btn btn-ghost btn-circle" @click.stop="toggleDropdown">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path
                                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                            </svg>
                            <span
                                class="badge badge-sm indicator-item bg-[#EF4444] px-2.5 py-3 text-[13px] rounded-full text-white ltr:left-0 top-[-6px] rtl:right-0">
                                {{ notificationsStore.notifications.length }}
                            </span>
                        </div>
                    </button>
                    <div
                        v-show="isDropdownOpen" ref="dropdownContent" tabindex="0"
                        class="card card-compact dropdown-content bg-base-300 z-3 mt-2 px-0 w-70 sm:w-75 md:w-80 lg:w-90 shadow rounded-none">
                        <div
                            v-for="(notification, index) in notificationsStore.sortedNotifications" :key="index"
                            class="card card-compact border-1 m-0 rounded-[3px]" :class="{
                                'ltr:border-l-6 rtl:border-r-6 border-[#E74C3C]':
                                    notification.severity === 'high',
                                'ltr:border-l-6 rtl:border-r-6 border-[#2563EB]':
                                    notification.severity === 'medium',
                                'ltr:border-l-6 rtl:border-r-6 border-[#10B981]':
                                    notification.severity === 'low',
                            }">
                            <div class="card-body p-4 flex flex-row gap-x-3">
                                <div class="text-base font-bold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                        viewBox="0 0 24 24" fill="none">
                                        <path
                                            :fill="getSeverityColor(notification.severity)"
                                            d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-6h2v2h-2zm0-10h2v8h-2z" />
                                    </svg>
                                </div>
                                <div class="flex flex-col gap-y-1">
                                    <p class="text-[10px] text-[#0000008F]">
                                        STAFF . {{ formatTime(notification.time) }}
                                    </p>
                                    <span class="text-sm font-bold">Incident -
                                        {{ capitalize(notification.severity) }} severity</span>
                                    <p class="text-xs text-gray-600">
                                        {{ truncateDescription(notification.description, 80) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-actions">
                            <nuxt-link
                                to="/clubAdmin/notifications"
                                class="btn bg-[#F19224] text-white btn-block rounded-none py-6 text-base"
                                @click="closeDropdown">
                                {{ $t("navbar.viewNotifications") }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-start sm:dropdown-center lg:dropdown-start content-center mx-5 sm:mx-3">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <div
                            class="w-10 rounded-full text-white flex items-center justify-center aspect-square bg-gradient-to-r from-[#F97316] to-[#EA580C]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 15 15">
                                <path
                                    fill="currentColor" fill-rule="evenodd"
                                    d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.97 4.97 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.02 4.02 0 0 0 7.5 9.975a4.02 4.02 0 0 0-3.482 2.004A5.65 5.65 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-0 shadow clubAdminLinks">
                        <li class="px-2">
                            <p
                                class="text-sm leading-3.5 flex flex-col items-start py-2 cursor-default hover:bg-transparent">
                                <span class="font-bold text-[#09090B]">John Elesha</span>
                                <span class="text-[#6B7280]">john@yahoo.com</span>
                            </p>
                        </li>
                        <li class="px-2">
                            <a class="text-[#09090B] py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 15 15">
                                    <path
                                        fill="currentColor" fill-rule="evenodd"
                                        d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.97 4.97 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.02 4.02 0 0 0 7.5 9.975a4.02 4.02 0 0 0-3.482 2.004A5.65 5.65 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ $t("navbar.profileSettings") }}
                            </a>
                        </li>
                        <li class="px-2">
                            <a class="text-[#09090B] py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42zm1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4z" />
                                </svg>
                                {{ $t("navbar.clubSettings") }}
                            </a>
                        </li>
                        <li class="px-2">
                            <a class="text-[#09090B] py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m11 14.5l-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8q.125-.125.3-.187T15.525 2q.5 0 .763.425t.012.875L13 9.5l5.925.75q.625.075.813.675t-.263 1.025L9.25 21.75q-.125.125-.3.188T8.475 22q-.5 0-.763-.425T7.7 20.7zm1.55 1.325l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825zM12 12" />
                                </svg>
                                {{ $t("navbar.planSettings") }}
                            </a>
                        </li>
                        <li class="px-2">
                            <a class="text-[#DC2626] py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path
                                            fill="currentColor"
                                            d="M12 3a1 1 0 0 1 .117 1.993L12 5H7a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h4.5a1 1 0 0 1 .117 1.993L11.5 21H7a3 3 0 0 1-2.995-2.824L4 18V6a3 3 0 0 1 2.824-2.995L7 3zm5.707 5.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415L17.414 13H12a1 1 0 1 1 0-2h5.414l-1.121-1.121a1 1 0 0 1 1.414-1.415" />
                                    </g>
                                </svg>
                                {{ $t("navbar.signOut") }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="text-xs leading-5">
                    <p class="font-bold text-[#09090B]">John Elesha</p>
                    <p class="text-[#6B7280]">{{ $t("navbar.clubAdministrator") }}</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from "#i18n";
import { useDirection } from "~/composables/useDirection";
import { useNotificationsStore } from "~/store/notifications";
import { onClickOutside } from "@vueuse/core";

const notificationsStore = useNotificationsStore();
const { t: _t } = useI18n();
const { direction } = useDirection();
const notificationButton = ref<HTMLElement | null>(null);
const dropdownContent = ref<HTMLElement | null>(null);
const isDropdownOpen = ref(false);

const truncateDescription = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
};

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

const severityColors: Record<string, string> = {
    high: "#E74C3C",
    medium: "#2563EB",
    low: "#10B981",
};

const getSeverityColor = (severity: string): string => severityColors[severity.toLowerCase()] || "#6B7280";

const formatTime = (time: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - time.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
        return `${diffMins} MIN${diffMins === 1 ? '' : 'S'} AGO`;
    } else if (diffHrs < 24) {
        const remainingMins = diffMins % 60;
        if (remainingMins === 0) {
            return `${diffHrs} HR${diffHrs === 1 ? '' : 'S'} AGO`;
        }
        return `${diffHrs} HR${diffHrs === 1 ? '' : 'S'}, ${remainingMins} MIN${remainingMins === 1 ? '' : 'S'} AGO`;
    } else {
        const remainingHrs = diffHrs % 24;
        if (remainingHrs === 0) {
            return `${diffDays} DAY${diffDays === 1 ? '' : 'S'} AGO`;
        }
        return `${diffDays} DAY${diffDays === 1 ? '' : 'S'}, ${remainingHrs} HR${remainingHrs === 1 ? '' : 'S'} AGO`;
    }
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

onClickOutside(dropdownContent, (event) => {
    if (
        isDropdownOpen.value &&
        !notificationButton.value?.contains(event.target as Node)
    ) {
        isDropdownOpen.value = false;
    }
});
</script>
