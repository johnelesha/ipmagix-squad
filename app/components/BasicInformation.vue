<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-semibold text-gray-900">Basic Information</h2>
      <button class="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span>Edit</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Club Name</label>
        <input
          type="text"
          value="Elite Sports Academy"
          class="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Club Type</label>
        <input
          type="text"
          value="Multi-Sport Facility"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Established Year</label>
        <input
          type="text"
          value="2015"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">License Number</label>
        <input
          type="text"
          value="ESA-2015-NYC-001"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <textarea
          rows="3"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        >123 Sports Avenue, Manhattan, New York, NY 10001, United States</textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input
          type="text"
          value="+1 (555) 123-4567"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value="info@elitesportsacademy.com"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
        <input
          type="text"
          value="www.elitesportsacademy.com"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Social Media</label>
        <input
          type="text"
          value="@elitesportsacademy"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
          readonly
        />
      </div>
    </div>
  </div>
</template>