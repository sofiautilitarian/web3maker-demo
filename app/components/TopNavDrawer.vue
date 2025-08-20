<template>
  <v-app>
    <v-layout class="fill-height">
      <!-- Top App Bar -->
      <v-app-bar flat height="48" :style="appBarStyle">
        <div class="nav-left d-flex align-center">
          <div class="custom-nav-icon" @click="drawer = !drawer">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar thick"></span>
          </div>
          <div class="logo-stack ml-2">
            <div class="logo-jp">しるし</div>
            <div class="logo-en">Shirushi Miner Admin</div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-chip class="ml-2" color="primary" variant="elevated">
            <v-icon start>mdi-ethereum</v-icon>
            0x0c...b19d
            <v-icon end small>mdi-content-copy</v-icon>
          </v-chip>
          <v-btn color="orange" icon="mdi-eye" variant="elevated" class="ml-2 rounded-square" height="40" width="40" />
        </template>
      </v-app-bar>

      <!-- Side Navigation -->
      <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary
        class="sidenav">
        <SideNavDrawer />
      </v-navigation-drawer>

      <!-- Main Content -->
      <v-main class="main-content">
        <v-container fluid class="pa-4 d-flex justify-center align-start fill-height">
          <div class="content-stack">
            <Reward />
            <Log />

            <v-row>
  <v-col cols="12" md="5" class="pr-4">
  <UnsettledOrders />
</v-col>

  <v-col cols="12" md="7">
    <WorkerInformation />
  </v-col>
</v-row>





          </div>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>



<script setup>
import { ref, watch } from 'vue'
import SideNavDrawer from './SideNavDrawer.vue'
import Log from './Log.vue'
import WorkerInformation from './WorkerInformation.vue'
const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})

// Solid off-white background
const appBarStyle = `
  background-color: #f8f8f8;
  color: #000;
  box-shadow: none;
  padding: 0 12px;
`
</script>

<style scoped>
/* Apply clean modern font globally in this component */
* .rounded-square {
  border-radius: 8px;
  /* You can tweak this for more/less roundness */
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
  /* space between hamburger and logo */
}

.logo-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  line-height: 1.1;
}

.logo-jp {
  font-size: 24px;
  font-weight: 900;
  font-family: 'Noto Serif JP', 'Sawarabi Mincho', serif;
  color: navy;
  letter-spacing: 2px;
  text-shadow:
    0 0 0.6px navy,
    0.4px 0 navy,
    -0.4px 0 navy,
    0 0.4px navy,
    0 -0.4px navy;
  -webkit-font-smoothing: antialiased;
}

.logo-en {
  font-size: 12px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: #001f3f;
  letter-spacing: 0.4px;
  margin-top: -2px;
}

.custom-nav-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  gap: 3px;
  cursor: pointer;
}

.custom-nav-icon .bar {
  width: 22px;
  height: 2px;
  background-color: #333;
  transition: all 0.3s;
  border-radius: 1px;
}

.custom-nav-icon .thick {
  height: 3px;
  /* thicker last line */
}

.v-navigation-drawer {
  position: fixed;
  left: 0;
}
.v-app {
  display: flex;
}


.content-wrapper {
  max-width: 960px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.main-content {
  height: calc(100vh - appbar); /* Viewport minus top bar */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.v-container {
  flex: 1 1 auto;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-stack {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  gap: 8px;
  overflow-y: auto;
}

.v-row {
  margin: 0 !important;
}

.custom-gap {
  column-gap: 12px; /* or 8px if you want it tighter */
} 



</style>

<!-- Font imports -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');
</style>
