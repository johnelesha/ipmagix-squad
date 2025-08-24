<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white w-[672px] rounded-xl p-6 shadow-lg relative m-2">
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        @click="$emit('close')"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-6">Add New Staff Member</h2>

      <div class="space-y-6">
        <div class="border-[0.2px] border-[#E5E7EB] rounded-xl p-4">
          <h3 class="text-sm font-medium mb-4">Basic Information</h3>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium mb-1">FULL NAME *</label>
              <input
                type="text"
                placeholder="Enter full name"
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm placeholder-[#CCCCCC]"
              />
            </div>

            <div>
              <label class="block text-xs font-medium mb-1"
                >EMAIL ADDRESS *</label
              >
              <input
                type="email"
                placeholder="Enter email address"
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm placeholder-[#CCCCCC]"
              />
            </div>

            <div>
              <label class="block text-xs font-medium mb-1">PHONE NUMBER</label>
              <input
                type="text"
                placeholder="Enter phone number"
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm placeholder-[#CCCCCC]"
              />
            </div>

            <div>
              <label class="block text-xs font-medium mb-1">POSITION</label>
              <select
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm"
              >
                <option>Select position</option>
                <option>Academy Director</option>
                <option>Sports Coordinator</option>
                <option>Facility Manager</option>
                <option>Customer Support</option>
                <option>Administrative Assisstant</option>
                <option>Finance Manager</option>
                <option>Marketing Specialist</option>
                <option>IT Support</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-medium mb-1"
                >ACADEMY ASSIGNMENT</label
              >
              <select
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm"
              >
                <option>Select academy</option>
                <option>Downtown Athletic</option>
                <option>Westside Sports Hub</option>
                <option>Elite Training Facility</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-medium mb-1">STATUS</label>
              <select
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm"
              >
                <option>Pending</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-medium mb-1">HIRING DATE</label>
              <input
                type="date"
                class="w-full border-[0.2px] border-[#E5E7EB] rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <!-- Permissions Section -->
        <div class="border-[0.2px] border-[#E5E7EB] rounded-xl p-4">
          <h3 class="text-sm font-medium mb-4">Permissions & Access</h3>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Manage Staff
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Manage Academies
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Manage Facilities
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> View Reports
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Manage Bookings
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Handle Support
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> Billing Access
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" /> System Admin
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-3 mt-6">
        <button
          class="px-4 py-2 rounded-lg border border-[#F19224] text-sm text-[#F19224] flex items-center gap-2"
          @click="$emit('close')"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.98755 1.3999L1.98755 9.3999"
              stroke="#F19224"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.98755 1.3999L9.98755 9.3999L1.98755 1.3999Z"
              fill="#F19224"
            />
            <path
              d="M1.98755 1.3999L9.98755 9.3999"
              stroke="#F19224"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          Cancel
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-[#F19224] text-white hover:bg-orange-600 text-sm flex items-center gap-2"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77091 1.3999C10.1226 1.40491 10.4581 1.54868 10.7042 1.7999L13.2376 4.33324C13.4888 4.57941 13.6326 4.91488 13.6376 5.26657V12.0666C13.6376 12.4202 13.4971 12.7593 13.247 13.0094C12.997 13.2594 12.6579 13.3999 12.3042 13.3999H2.97091C2.61728 13.3999 2.27815 13.2594 2.0281 13.0094C1.77805 12.7593 1.63757 12.4202 1.63757 12.0666V2.73324C1.63757 2.37961 1.77805 2.04048 2.0281 1.79043C2.27815 1.54038 2.61728 1.3999 2.97091 1.3999H9.77091Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9709 13.3997V8.73307C10.9709 8.55626 10.9006 8.38669 10.7756 8.26167C10.6506 8.13664 10.481 8.06641 10.3042 8.06641H4.97087C4.79405 8.06641 4.62449 8.13664 4.49946 8.26167C4.37444 8.38669 4.3042 8.55626 4.3042 8.73307V13.3997"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.3042 1.3999V4.06657C4.3042 4.24338 4.37444 4.41295 4.49946 4.53797C4.62449 4.663 4.79405 4.73324 4.97087 4.73324H9.63753"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add Staff
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>
