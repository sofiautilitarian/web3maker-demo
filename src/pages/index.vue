<template>
  <v-app-bar app color="white" elevate-on-scroll>
  <v-toolbar-title class="text-primary font-weight-bold">Web3 Maker</v-toolbar-title>
  <v-spacer></v-spacer>

  <v-btn icon="mdi-account-plus" variant="outlined" class="mx-2" @click="signUp">
    <v-icon>mdi-account-plus</v-icon>
  </v-btn>
  <v-btn icon="mdi-login" variant="outlined" class="mx-2" @click="logIn">
    <v-icon>mdi-login</v-icon>
  </v-btn>
</v-app-bar>


  <v-navigation-drawer v-model="drawer" app :permanent="!isMobile" temporary>
  <v-list nav dense>
    <v-list-item prepend-icon="mdi-home" title="Top" to="/" />
    <v-list-item prepend-icon="mdi-star" title="Features" to="/features" />
    <v-list-item prepend-icon="mdi-rocket" title="Let's Start" to="/start" />
    <v-list-item prepend-icon="mdi-shopping" title="Shop" to="/shop" />
    <v-list-item prepend-icon="mdi-currency-usd" title="Coins" to="/coins" />
    <v-list-item prepend-icon="mdi-server" title="Mining Pool" to="/mining" />
    <v-list-item prepend-icon="mdi-account-group" title="Affiliate" to="/affiliate" />
    <v-list-item prepend-icon="mdi-help-circle" title="Support" to="/support" />
    <v-list-item prepend-icon="mdi-information" title="About Us" to="/about" />
  </v-list>
</v-navigation-drawer>


  <v-main>
    <v-container>
      <v-card class="pa-4">
        <h1>Welcome to Web3 Maker</h1>
        <p>This is your home page.</p>
      </v-card>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
