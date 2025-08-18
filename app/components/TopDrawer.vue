<template>
   <v-card>
  <v-layout>
    <!-- App Bar with off-white background -->
    <v-app-bar flat :style="appBarStyle" height="48">
      <!-- Left section: nav + logo -->
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

      <!-- Right section: buttons and wallet info -->
      <v-spacer></v-spacer> <!-- pushes next section to the right -->

      <template v-if="$vuetify.display.mdAndUp">
        <!-- Search Button
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <!-- Filter Button -->
        <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> --> 

        <!-- Wallet display -->
        <v-chip class="ml-2" color="primary" variant="elevated">
          <v-icon start>mdi-ethereum</v-icon>
          0x0c...b19d
          <v-icon end small>mdi-content-copy</v-icon>
        </v-chip>

        <!-- Eye Button -->
        <v-btn color="orange" icon="mdi-eye" variant="elevated" class="ml-2 rounded-square"height="40" width="40"></v-btn>
      </template>

      
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list :items="items" />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main style="height: 500px;">
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-main>
  </v-layout>
</v-card>

</template>

<script setup>
import { ref, watch } from 'vue'

const drawer = ref(false)
const group = ref(null)

const items = [
  { title: 'Foo', value: 'foo' },
  { title: 'Bar', value: 'bar' },
  { title: 'Fizz', value: 'fizz' },
  { title: 'Buzz', value: 'buzz' },
]

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
* 
.rounded-square {
  border-radius: 8px; /* You can tweak this for more/less roundness */
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px; /* space between hamburger and logo */
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
  height: 3px; /* thicker last line */
}



</style>

<!-- Font imports -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');
</style>
