<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-6">Color Scheme</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-orange-500 rounded-lg border border-gray-200"></div>
          <span class="text-sm font-mono text-gray-600">#FF9224</span>
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-green-400 rounded-lg border border-gray-200"></div>
          <span class="text-sm font-mono text-gray-600">#c5f780</span>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-4">Color Presets</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="flex space-x-1">
              <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
              <div class="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700">Orange & Green</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="flex space-x-1">
              <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div class="w-4 h-4 bg-blue-700 rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700">Blue & Navy</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="flex space-x-1">
              <div class="w-4 h-4 bg-red-500 rounded-full"></div>
              <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700">Red & Gold</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="flex space-x-1">
              <div class="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div class="w-4 h-4 bg-pink-500 rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700">Purple & Pink</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>