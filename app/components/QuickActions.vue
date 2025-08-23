<template>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
    <button class="flex items-center justify-center space-x-3 p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
      <Icon name="heroicons:document-text" class="w-5 h-5" />
      <span class="font-medium">Club Report</span>
    </button>
    
    <button class="flex items-center justify-center space-x-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
      <Icon name="heroicons:arrow-down-tray" class="w-5 h-5" />
      <span class="font-medium">Export Data</span>
    </button>
    
    <button class="flex items-center justify-center space-x-3 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
      <Icon name="heroicons:clock" class="w-5 h-5" />
      <span class="font-medium">View History</span>
    </button>
    
    <button class="flex items-center justify-center space-x-3 p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
      <Icon name="heroicons:document-duplicate" class="w-5 h-5" />
      <span class="font-medium">Backup Profile</span>
    </button>
  </div>
</template>