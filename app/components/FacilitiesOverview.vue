<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900">Facilities Overview</h3>
      <button class="text-orange-500 hover:text-orange-600 text-sm font-medium">Manage Facilities</button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="text-center p-4 bg-blue-50 rounded-lg">
        <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:globe-alt" class="w-6 h-6 text-white" />
        </div>
        <div class="text-2xl font-bold text-blue-900">4</div>
        <div class="text-xs text-blue-700">Tennis Courts</div>
      </div>
      
      <div class="text-center p-4 bg-orange-50 rounded-lg">
        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:globe-alt" class="w-6 h-6 text-white" />
        </div>
        <div class="text-2xl font-bold text-orange-900">1</div>
        <div class="text-xs text-orange-700">Basketball</div>
      </div>
      
      <div class="text-center p-4 bg-cyan-50 rounded-lg">
        <div class="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:globe-alt" class="w-6 h-6 text-white" />
        </div>
        <div class="text-2xl font-bold text-cyan-900">1</div>
        <div class="text-xs text-cyan-700">Swimming Pool</div>
      </div>
      
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:globe-alt" class="w-6 h-6 text-white" />
        </div>
        <div class="text-2xl font-bold text-green-900">1</div>
        <div class="text-xs text-green-700">Fitness Center</div>
      </div>
    </div>
  </div>
</template>