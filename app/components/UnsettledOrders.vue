<template>
  <v-container class=''>
    <div style="--app-header-bg: #0CAFFF;">
  <AppHeader />
</div>
    <div id="custom-font-for-letters">
      <DataTable3 />
    </div>
    <v-divider></v-divider>
  </v-container>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './AppHeader.vue'
import DataTable3 from './DataTable3.vue'
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



#custom-font-for-letters::v-deep * {
  font-size: 8px !important;
  color: #031b2a;
  font-family: 'Noto Serif JP', 'Sawarabi Mincho', serif;
}



</style>