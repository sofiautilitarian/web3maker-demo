<template>
  <v-expansion-panels>
    <v-expansion-panel style="background-color: red;" hide-actions>
  <!-- Just show the title text -->
  <template #title>
    Text Item
  </template>
</v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>
<style lang="css">

.mdi-chevron-down {
    display: none;
}
</style>