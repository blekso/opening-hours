<template>
  <div>
    <OpeningHours :pairing="true" :showClosedDays="true" :cycleWeek="true" />
  </div>
</template>

<script>
import OpeningHours from "~/components/OpeningHours";
export default {
  components: {
    OpeningHours
  }
};
</script>
