<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Staff Directory</h3>
      <button class="text-orange-500 hover:text-orange-600 text-sm font-medium">View All Staff</button>
    </div>

    <div class="space-y-4">
      <div class="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
        <img src="../assets/images/staff1.jpg" alt="Sarah Martinez" class="w-12 h-12 rounded-full object-cover" />
        <div class="flex-1">
          <h4 class="font-medium text-gray-900">Sarah Martinez</h4>
          <p class="text-sm text-gray-600">Head Tennis Coach</p>
          <p class="text-xs text-gray-500">10 years experience</p>
        </div>
        <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Available</span>
      </div>

      <div class="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
        <img src="../assets/images/staff1.jpg" alt="David Thompson" class="w-12 h-12 rounded-full object-cover" />
        <div class="flex-1">
          <h4 class="font-medium text-gray-900">David Thompson</h4>
          <p class="text-sm text-gray-600">Basketball Coach</p>
          <p class="text-xs text-gray-500">7 years experience</p>
        </div>
        <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">In Session</span>
      </div>

      <div class="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
        <img src="../assets/images/staff1.jpg" alt="Emily Chen" class="w-12 h-12 rounded-full object-cover" />
        <div class="flex-1">
          <h4 class="font-medium text-gray-900">Emily Chen</h4>
          <p class="text-sm text-gray-600">Swimming Instructor</p>
          <p class="text-xs text-gray-500">5 years experience</p>
        </div>
        <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Available</span>
      </div>
    </div>
  </div>
</template>