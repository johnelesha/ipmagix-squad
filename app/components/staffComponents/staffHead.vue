<template>
  <header class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
    <div>
      <nav class="text-gray-500 text-sm">
        Dashboard &gt; <span class="text-black">Staff Management</span>
      </nav>
      <h3 class="text-lg font-semibold mt-1">Staff Management</h3>
    </div>

    <div class="flex items-center gap-3">
      <label class="relative">
        <svg
          class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </g>
        </svg>
        <input
          type="search" placeholder="Search staff members..."
          class="w-80 h-10 pl-10 pr-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" >
      </label>

      <button class="btn btn-orange text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition" @click="openModal">
        + Add Staff
      </button>
      <add-staff-modal v-if="isModalOpen" @close="isModalOpen = false"></add-staff-modal>
    </div>
  </header>
</template>

<script>
import AddStaffModal from "./AddStaffModal.vue";
export default {
  components: { AddStaffModal },
  setup() {
    const isModalOpen = ref(false);
    function openModal() {
      isModalOpen.value = true;
    }
    return { openModal, isModalOpen };
  },
};
</script>

<style scoped>
.btn-orange {
  background-color: #f19224;
}
</style>
