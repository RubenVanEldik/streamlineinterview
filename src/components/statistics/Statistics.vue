<template>
  <div class="boxes">
    <StatisticsBox title="Total" :number="total" />
    <StatisticsBox title="Active" :number="active" />
    <StatisticsBox title="Inactive" :number="inactive"></StatisticsBox>
  </div>
</template>


<script>
import StatisticsBox from './StatisticsBox.vue'

export default {
  name: 'Statistics',
  components: {
    StatisticsBox
  },

  data () {
    return {
      total: null,
      active: null,
      inactive: null
    }
  },

  async mounted () {
    const { total, active, inactive } = await this.$store.getters.customerStatistics
    this.total = total
    this.active = active
    this.inactive = inactive
  }
}
</script>


<style scoped>
.boxes {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
}
</style>
