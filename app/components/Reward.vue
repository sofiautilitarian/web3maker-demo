<template>
<v-main class="main-content">
    <v-card class="bgcolor" text="リワード (68ライセンス)"></v-card>
    <RewardDataTable/>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RewardDataTable from './RewardDataTable.vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>

.main-content {
  margin-top: 56px; /* This ensures that content stays below the navbar */
  padding-left: 16px;
  padding-right: 16px;
}

.bgcolor {
  background-color: red;
  padding: 20px;
  margin-top: 20px; /* Ensures there is some space below the navbar */
}
</style>
