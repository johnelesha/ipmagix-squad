<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900">Operating Hours</h3>
      <button class="text-orange-500 hover:text-orange-600 text-sm font-medium">Edit Schedule</button>
    </div>

    <div class="space-y-3">
      <div class="flex items-center justify-between py-2">
        <span class="text-sm text-gray-700">Monday - Friday</span>
        <span class="text-sm font-medium text-gray-900">6:00 AM - 11:00 PM</span>
      </div>
      
      <div class="flex items-center justify-between py-2">
        <span class="text-sm text-gray-700">Saturday</span>
        <span class="text-sm font-medium text-gray-900">7:00 AM - 10:00 PM</span>
      </div>
      
      <div class="flex items-center justify-between py-2">
        <span class="text-sm text-gray-700">Sunday</span>
        <span class="text-sm font-medium text-gray-900">8:00 AM - 9:00 PM</span>
      </div>
      
      <div class="flex items-center justify-between py-2 border-t border-gray-100 pt-3">
        <span class="text-sm text-gray-700">Holiday Hours</span>
        <span class="text-sm font-medium text-gray-900">9:00 AM - 6:00 PM</span>
      </div>
    </div>
  </div>
</template>