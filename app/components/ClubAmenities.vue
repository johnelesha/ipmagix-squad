<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Club Amenities</h3>
      <button class="text-orange-500 hover:text-orange-600 text-sm font-medium">Manage Amenities</button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:truck" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-green-900">Free Parking</p>
        <p class="text-xs text-green-700">Available</p>
      </div>
      
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:wifi" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-green-900">Free WiFi</p>
        <p class="text-xs text-green-700">Available</p>
      </div>
      
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:building-storefront" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-green-900">Cafe & Snacks</p>
        <p class="text-xs text-green-700">Open 7AM-9PM</p>
      </div>
      
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:building-storefront" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-green-900">Pro Shop</p>
        <p class="text-xs text-green-700">Equipment & Gear</p>
      </div>
      
      <div class="text-center p-4 bg-yellow-50 rounded-lg">
        <div class="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:sparkles" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-yellow-900">Spa Services</p>
        <p class="text-xs text-yellow-700">By Appointment</p>
      </div>
      
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Icon name="heroicons:heart" class="w-5 h-5 text-white" />
        </div>
        <p class="text-xs font-medium text-green-900">Childcare</p>
        <p class="text-xs text-green-700">Ages 3-12</p>
      </div>
    </div>
  </div>
</template>