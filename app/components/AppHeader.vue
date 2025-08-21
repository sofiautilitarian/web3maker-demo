<template>
  <v-expansion-panels>
    <v-expansion-panel 
      :style="{ backgroundColor: backgroundColor }" 
      hide-actions
      class="app-header-panel"
    >
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
  name: 'AppHeader',
  props: {
    backgroundColor: {
      type: String,
      default: 'red'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="css">
.mdi-chevron-down {
    display: none;
}

/* Make the component easily overridable with CSS custom properties */
.app-header-panel {
  background-color: var(--app-header-bg, red) !important;
}
</style>