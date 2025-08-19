<template>
    <!-- MAIN CODE PLEASE CHANGE HERE AS REQUIRED !-->
  <div class="pa-0">
    <!-- STAGING MODE Button at the Top -->
    <v-list-item class="pa-2">
      <v-btn
        color="warning"
        dark
        block
        elevation="1"
        style="font-weight: bold;"
      >
        <v-icon left small>mdi-aws</v-icon>
        STAGING MODE
      </v-btn>
    </v-list-item>

    <!-- Navigation Links -->
    <v-list-item link title="システム"></v-list-item>
    <v-list-item link title="入出金消込"></v-list-item>
    <v-list-item link title="Customers"></v-list-item>
    <v-list-item link title="セールス"></v-list-item>
    <v-list-item link title="トレーディング"></v-list-item>
    <v-list-item link title="マイニングブースト"></v-list-item>
    <v-list-item link title="代理店"></v-list-item>
    <v-list-item link title="生産"></v-list-item>
    <v-list-item link title="ワーカー"></v-list-item>
    <v-list-item link title="セキュリティ"></v-list-item>
    <v-list-item link title="ショップ"></v-list-item>
    <v-list-item link title="コイン"></v-list-item>
    <v-list-item link title="リワード"></v-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
/* Optional: Fine-tune vertical padding further */
.v-list-item {
  min-height: 48px; /* Adjust as needed */
}
</style>
