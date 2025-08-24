<template>
  <div class="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
    <!-- Sidebar -->
    <AppSidebar class="w-full lg:w-64 flex-shrink-0" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <AppHeader class="w-full" />

      <!-- Page Content -->
      <main class="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto">
          <!-- Breadcrumb -->
          <div
            class="flex flex-wrap items-center space-x-1 sm:space-x-2 text-sm text-gray-600 mb-4 sm:mb-6"
          >
            <span>Dashboard</span>
            <Icon name="heroicons:chevron-right" class="w-4 h-4" />
            <span class="text-gray-900 font-medium">Club Profile</span>
          </div>

          <!-- Profile Completion -->
          <ProfileCompletion />

          <!-- Basic Information + Logo & Stats -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <!-- Left Column -->
            <div class="lg:col-span-2 space-y-4 sm:space-y-6">
              <BasicInformation />
            </div>

            <!-- Right Column -->
            <div class="space-y-4 sm:space-y-6">
              <ClubLogo />
              <QuickStats />
            </div>
          </div>

          <!-- Color Scheme -->
          <div class="mt-6">
            <ColorScheme />
          </div>

          <!-- Operating Hours, Facilities, Membership, Staff, Amenities -->
          <div class="grid grid-cols-1 gap-4 sm:gap-6 mt-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <OperatingHours />
              <FacilitiesOverview />
            </div>

            <MembershipPlans />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <StaffDirectory />
              <ClubAmenities />
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mt-6">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
