<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Membership Plans</h3>
      <button class="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 flex items-center space-x-2">
        <Icon name="heroicons:plus" class="w-4 h-4" />
        <span>Add Plan</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="border border-gray-200 rounded-lg p-6 relative">
        <div class="absolute top-4 right-4">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Active</span>
        </div>
        
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Basic Plan</h4>
        <div class="mb-4">
          <span class="text-3xl font-bold text-gray-900">$49</span>
          <span class="text-gray-600">/month</span>
        </div>
        
        <ul class="space-y-2 text-sm">
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Access to gym facilities</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Group fitness classes</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Locker room access</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">24/7 online booking</span>
          </li>
        </ul>
        
        <div class="mt-4 text-xs text-gray-500">
          76 active members
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 relative">
        <div class="absolute top-4 right-4">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Active</span>
        </div>
        
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Premium Plan</h4>
        <div class="mb-4">
          <span class="text-3xl font-bold text-gray-900">$89</span>
          <span class="text-gray-600">/month</span>
        </div>
        
        <ul class="space-y-2 text-sm">
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">All basic plan features</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Personal training sessions</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Pool and court access</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">224 active members</span>
          </li>
        </ul>
        <div class="mt-4 text-xs text-gray-500">
          76 active members
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 relative">
        <div class="absolute top-4 right-4">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Active</span>
        </div>
        
        <h4 class="text-lg font-semibold text-gray-900 mb-2">VIP Plan</h4>
        <div class="mb-4">
          <span class="text-3xl font-bold text-gray-900">$149</span>
          <span class="text-gray-600">/month</span>
        </div>
        
        <ul class="space-y-2 text-sm">
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">All premium plan features</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Priority booking</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">Spa and wellness access</span>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="heroicons:check" class="w-4 h-4 text-green-500" />
            <span class=" text-gray-500">78 active members</span>
          </li>
        </ul>
        <div class="mt-4 text-xs text-gray-500">
          76 active members
        </div>
      </div>
    </div>
  </div>
</template>