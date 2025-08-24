<template>
  <div class="p-6 bg-white shadow-md rounded-xl w-full">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-800">Staff Members</h2>
      <div class="flex gap-3 items-center">
        <button class="text-sm hover:underline font-medium flex items-center">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 11.3753H13.25V12.542H2.75V11.3753ZM8.58333 7.98033L12.13 4.43366L12.9467 5.26199L8 10.2087L3.05333 5.26199L3.87 4.43366L7.41667 7.98033V1.45866H8.58333V7.98033Z"
              fill="black"
            />
          </svg>
          Export
        </button>
        <div class="flex items-center text-sm">
          <label class="text-gray-600">Sort by:</label>
          <select
            class="ml-2 border rounded-[16px] px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#F19224]"
          >
            <option>Name</option>
            <option>Department</option>
            <option>Status</option>
          </select>
        </div>
      </div>
    </div>

    <table
      class="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden"
    >
      <thead class="text-gray-700" style="background-color: #f9fafb">
        <tr>
          <th class="p-3">Staff Member</th>
          <th class="p-3">Role</th>
          <th class="p-3">Department</th>
          <th class="p-3">Contact</th>
          <th class="p-3">Status</th>
          <th class="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in staffList"
          :key="member.email"
          class="border-top hover:bg-gray-50"
        >
          <td class="p-3">
            <div class="flex items-center gap-3">
              <div
                :class="`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ${member.color}`"
              >
                {{ getInitials(member.name) }}
              </div>
              <div>
                <div class="font-medium text-gray-800">
                  {{ member.name }}
                </div>
                <div class="text-gray-500 text-xs">
                  {{ member.date }}
                </div>
              </div>
            </div>
          </td>

          <td class="p-3">
            <div class="text-gray-800">{{ member.role }}</div>
            <div class="text-gray-500 text-xs">{{ member.level }}</div>
          </td>

          <td class="p-3 text-gray-700">{{ member.department }}</td>

          <td class="p-3 hover:underline cursor-pointer">
            <p>{{ member.email }}</p>
            <p class="text-gray-500">{{ member.phoneNumber }}</p>
          </td>

          <td class="p-3">
            <span
              :class="[
                'px-2 py-1 text-xs font-medium rounded-full',
                member.status === 'Active' ? 'active' : 'onleave',
              ]"
            >
              {{ member.status }}
            </span>
          </td>

          <td class="py-6 mx-2 flex gap-3 justify-center items-center">
            <button class="text-gray-600 hover:text-green-600">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.61508 10.6533L11.3751 3.89332L10.4284 2.94665L3.66842 9.71999V10.6533H4.61508ZM5.16175 11.9867H2.33508V9.15999L9.96175 1.53332C10.0862 1.40888 10.2417 1.34665 10.4284 1.34665C10.6151 1.34665 10.7706 1.40888 10.8951 1.53332L12.7884 3.42665C12.9218 3.5511 12.9884 3.70665 12.9884 3.89332C12.9884 4.07999 12.9218 4.23999 12.7884 4.37332L5.16175 11.9867ZM2.33508 13.32H14.3351V14.6533H2.33508V13.32Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button class="text-gray-600 hover:text-red-600">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.668 4.00033H15.0013V5.33366H13.668V14.0003C13.668 14.187 13.6035 14.3448 13.4746 14.4737C13.3457 14.6025 13.188 14.667 13.0013 14.667H3.66797C3.4813 14.667 3.32352 14.6025 3.19464 14.4737C3.06575 14.3448 3.0013 14.187 3.0013 14.0003V5.33366H1.66797V4.00033H5.0013V2.00033C5.0013 1.81366 5.06575 1.65588 5.19464 1.52699C5.32352 1.3981 5.4813 1.33366 5.66797 1.33366H11.0013C11.188 1.33366 11.3457 1.3981 11.4746 1.52699C11.6035 1.65588 11.668 1.81366 11.668 2.00033V4.00033ZM12.3346 5.33366H4.33464V13.3337H12.3346V5.33366ZM6.33464 7.33366H7.66797V11.3337H6.33464V7.33366ZM9.0013 7.33366H10.3346V11.3337H9.0013V7.33366ZM6.33464 2.66699V4.00033H10.3346V2.66699H6.33464Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-6 flex justify-between items-center">
      <div class="text-sm text-gray-500">
        Showing {{ 6 * pageNum - 6 + 1 }} to {{ 6 * pageNum }} of
        {{ getStaff().length }} staff members
      </div>
      <div class="flex gap-1">
        <button
          class="px-3 py-1 text-sm border rounded-[16px] hover:bg-[#d8d8d8]"
          :class="{ 'opacity-50 cursor-not-allowed': pageNum == 1 }"
          :disabled="pageNum == 1"
          @click="goToPrev"
        >
          Previous
        </button>
        <button
          v-for="i in numOfPages"
          :key="i"
          :class="[
            'px-3 py-1 text-sm border rounded-full',
            i === pageNum ? 'activePage' : 'inactivePage',
          ]"
          @click="updatePage"
        >
          {{ i }}
        </button>

        <button
          class="px-3 py-1 text-sm border rounded-[16px] hover:bg-[#d8d8d8]"
          :class="{ 'opacity-50 cursor-not-allowed': pageNum == numOfPages }"
          :disabled="pageNum == numOfPages"
          @click="goToNext"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useStaffStore from "~/store/staffStore";

export default {
  setup() {
    const staffStore = useStaffStore();
    const pageNum = ref(1);
    const getInitials = (name) =>
      name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    const numOfPages = computed(() =>
      Math.ceil(staffStore.loadStaff.length / 6)
    );
    const staffList = computed(() =>
      staffStore.loadStaff.slice(6 * pageNum.value - 6, 6 * pageNum.value)
    );

    function getStaff() {
      return staffStore.loadStaff;
    }
    function updatePage(e) {
      pageNum.value = +e.target.textContent;
    }
    function goToNext() {
      pageNum.value++;
    }
    function goToPrev() {
      pageNum.value--;
    }
    return {
      getInitials,
      getStaff,
      staffList,
      updatePage,
      goToNext,
      goToPrev,
      pageNum,
      numOfPages,
    };
  },
};
</script>

<style scoped>
.active {
  background-color: #10b981;
  color: white;
}
.onleave {
  background-color: #f59e0b;
  color: white;
}
.border-top {
  border-top: 1px solid #e5e7eb;
}

.activePage {
  background-color: #f19224;
  color: white;
}
.inactivePage:hover {
  background-color: #d8d8d8;
}
</style>
