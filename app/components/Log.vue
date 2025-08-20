<template>
  <v-main class="main-content">
    <v-card class="section-header" flat>
      リワード (68ライセンス)
    </v-card>

    <v-card class="data-table-card" flat>
      <DataTable2 />
    </v-card>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable2 from './DataTable2.vue'


export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>

.bgcolor {
  background-color: red;
  padding: 20px;
  margin-top: 20px; /* Ensures there is some space below the navbar */
}

.main-content {
  padding: 0;
  margin: 0;
}

.section-header {
  background-color: #0fed4e;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 14px;
}

.data-table-card {
  padding: 0 8px;
  margin-top: 4px;
  box-shadow: none;
  max-height: 25vh; /* keep the component small — adjust as needed */
  overflow-y: auto;
}
</style>