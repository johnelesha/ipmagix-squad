<template>
  <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">M</span>
        </div>
        <div>
          <h1 class="font-bold text-gray-900">MAGIX SQUAD</h1>
          <p class="text-xs text-gray-600">Club Admin</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li v-for="item in navigationItems" :key="item.name">
          <a
            href="#"
            :class="[
              'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors',
              item.active 
                ? 'bg-orange-50 text-orange-600 font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navigationItems = [
  { name: 'Dashboard', icon: 'heroicons:squares-2x2', active: false },
  { name: 'Staff Management', icon: 'heroicons:users', active: false },
  { name: 'Academy Management', icon: 'heroicons:academic-cap', active: false },
  { name: 'Facility Management', icon: 'heroicons:building-office', active: false },
  { name: 'Booking Calendar', icon: 'heroicons:calendar-days', active: false },
  { name: 'Reports', icon: 'heroicons:chart-bar', active: false },
  { name: 'Billing & Subscription', icon: 'heroicons:credit-card', active: false },
  { name: 'Support Tickets', icon: 'heroicons:ticket', active: false },
  { name: 'Notifications', icon: 'heroicons:bell', active: false },
  { name: 'Club Settings', icon: 'heroicons:cog-6-tooth', active: true }
]
</script>