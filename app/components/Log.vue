<template>
  <v-container class='custom-padding'>
    <div style="--app-header-bg: #32CD32;">
  <AppHeader />
</div>
    <div id="custom-font-for-letters">
      <DataTable2 />
    </div>
    <v-divider></v-divider>
  </v-container>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './AppHeader.vue'
import DataTable2 from './DataTable2.vue'
//import AppButton from './AppButton.vue'
//import { VTable } from 'vuetify/components'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');

.custom-padding {
  padding: 0 64px !important;
}

#custom-font-for-letters::v-deep * {
  font-size: 0.59rem !important;
  color: #031b2a;
  font-family: 'Noto Serif JP', 'Sawarabi Mincho', serif;
}



</style>