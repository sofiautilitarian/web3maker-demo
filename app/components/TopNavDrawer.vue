<template>
  <div class="top-nav">
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="left" width="280" class="sidebar-drawer">
      <SideNavDrawer />
    </v-navigation-drawer>

    <!-- Top App Bar -->
    <v-app-bar flat height="48" :style="appBarStyle" class="app-bar-shadow" location="top" :absolute="false"
      :fixed="false">
      <div class="nav-left">
        <div class="custom-nav-icon" @click="drawer = !drawer">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar thick"></span>
        </div>
        <div class="logo-stack">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideNavDrawer from '../components/SideNavDrawer.vue'

const drawer = ref(false)

const appBarStyle = `
  background-color: #f8f8f8;
  color: #000;
  padding: 0 12px;
`
</script>

<style scoped>
.top-nav {
  width: 100%;
}

.app-bar-shadow {
  box-shadow: 0 2px 8px rgba(248, 248, 248, 0.6),
              0 1px 3px rgba(248, 248, 248, 0.4) !important;
}

.rounded-square {
  border-radius: 8px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-stack {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  margin-left: 8px;
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
}

.logo-en {
  font-size: 12px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: #001f3f;
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
  border-radius: 1px;
}

.custom-nav-icon .thick {
  height: 3px;
}

.sidebar-drawer {
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .logo-stack {
    margin-left: 4px;
  }
  .logo-jp {
    font-size: 20px;
  }
  .logo-en {
    font-size: 10px;
  }
  .nav-left {
    gap: 4px;
  }
}
</style>

<!-- Fonts -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');
</style>
