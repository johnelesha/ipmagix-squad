<template>
  <header class="bg-white border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex-1 max-w-md">
        <div class="relative">
          <Icon name="heroicons:magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Academy staff, Club settings..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <!-- Notifications -->
        <div class="relative">
          <button class="p-2 text-gray-600 hover:text-gray-900 relative">
            <Icon name="heroicons:bell" class="w-6 h-6" />
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </button>
        </div>

        <!-- User Profile -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">H</span>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-gray-900">Harlem Assam</p>
            <p class="text-xs text-gray-600">Club Administrator</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>