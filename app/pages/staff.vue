<template>
  <div class="main">
    <StaffHead></StaffHead>
    <div class="flex justify-center">
      <div class="mx-12 my-12 flex gap-7 flex-wrap">
        <StaffCards></StaffCards>
        <StaffFilters></StaffFilters>
        <StaffTable></StaffTable>
      </div>
    </div>
  </div>
</template>

<script>
import StaffCards from "~/components/staffComponents/StaffCards.vue";
import StaffFilters from "~/components/staffComponents/StaffFilters.vue";
import StaffHead from "~/components/staffComponents/staffHead.vue";
import StaffTable from "~/components/staffComponents/StaffTable.vue";
export default {
  components: { StaffHead, StaffCards, StaffFilters, StaffTable },
};
</script>

<style scoped>
.main {
  width: 1200px;
  height: 1116px;
  background-color: #f5f9fd;
  box-sizing: content-box;
}
</style>
