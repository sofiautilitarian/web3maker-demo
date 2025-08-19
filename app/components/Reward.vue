<template>
  <div class="container">
    <v-card class="bgcolor" text="リワード (68ライセンス)">
      <RewardDataTable />
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RewardDataTable from './RewardDataTable.vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* The container for centering the content */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Takes full viewport height */
  padding: 20px; /* Adds padding around the edges */
  box-sizing: border-box; /* Ensures padding doesn't affect the layout */
  background-color: #f4f4f4; /* Light background to contrast the red card */
}

.bgcolor {
  background-color: red;
  padding: 20px; /* Adds some padding inside the card */
  width: 80%; /* Adjust the width as needed */
  max-width: 1200px; /* Limits the maximum width */
  border-radius: 8px; /* Optional: Adds rounded corners */
}

.v-card {
  width: 100%; /* Ensures the card takes full available width */
  margin: 20px 0; /* Adds vertical margin around the card */
}
</style>
