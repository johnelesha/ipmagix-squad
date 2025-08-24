<template>
  <div class="w-full bg-white rounded-2xl shadow-md p-6">
    <div class="flex items-center justify-between">
      <p class="font-medium">Filters</p>
      <button
        class="btn btn-ghost rounded-full ml-auto text-sm font-medium"
        style="color: #f19224"
      >
        Clear All
      </button>
    </div>
    <div class="flex items-center gap-4 flex-wrap">
      <button class="btn px-4 py-2 rounded-full active text-sm font-medium">
        All Staff
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        Coaches
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        Trainers
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        Administrative
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        Maintenance
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        Active
      </button>

      <button class="btn px-4 py-2 rounded-full inactive text-sm font-medium">
        On Leave
      </button>

      <select
        class="btn px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 focus:outline-none"
      >
        <option>Department</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: #f19224;
  color: white;
}
.inactive {
  background-color: #f392241a;
  border: 1px solid #f392244d;
}
</style>
