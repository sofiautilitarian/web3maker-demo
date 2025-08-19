<template>
  <div class="pa-0">
    <!-- STAGING MODE Button -->
    <v-list-item class="pa-2">
      <v-btn color="warning" block elevation="1" style="font-weight: bold;">
        <v-icon left small style="color: black; margin-right: 8px;">
          mdi-aws
        </v-icon>
        <span style="color: black;">STAGING MODE</span>
      </v-btn>
    </v-list-item>

    <v-list density="compact" nav>
      <v-list-group v-for="(item, index) in navItems" :key="index" :value="expanded === index"
        @click="toggleExpand(index)" :prepend-icon="item.icon">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :class="{ 'active-item': selected === item.title }"
            @click.stop="selected = item.title">
            <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item v-for="(child, i) in item.children" :key="i" @click.stop="selected = child.title"
          :class="{ 'active-item': selected === child.title }">
          <v-list-item-title>{{ child.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>


<!--This part contains the required items in the sidebar, every item has children!-->
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const selected = ref('')
    const expanded = ref<number | null>(null)

    const navItems = [
      {
        title: 'システム',
        icon: 'mdi-cog',
        children: [
          { title: 'システム設定' },
          { title: 'ログ' }
        ]
      },
      {
        title: '入出金消込',
        icon: 'mdi-cash',
        children: [
          { title: '入金' },
          { title: '出金' }
        ]
      },
      {
        title: 'Customers',
        icon: 'mdi-account-group',
        children: []
      },
      {
        title: 'セールス',
        icon: 'mdi-sale',
        children: []
      },
      {
        title: 'トレーディング',
        icon: 'mdi-chart-line',
        children: []
      },
      {
        title: 'マイニングブースト',
        icon: 'mdi-server',
        children: []
      },
      {
        title: '代理店',
        icon: 'mdi-office-building',
        children: []
      },
      {
        title: '生産',
        icon: 'mdi-factory',
        children: []
      },
      {
        title: 'ワーカー',
        icon: 'mdi-account-hard-hat',
        children: []
      },
      {
        title: 'セキュリティ',
        icon: 'mdi-shield-lock',
        children: []
      },
      {
        title: 'ショップ',
        icon: 'mdi-store',
        children: []
      },
      {
        title: 'コイン',
        icon: 'mdi-currency-btc',
        children: []
      },
      {
        title: 'リワード',
        icon: 'mdi-gift',
        children: []
      }
    ]

    const toggleExpand = (index: number) => {
      expanded.value = expanded.value === index ? null : index
    }

    return {
      navItems,
      selected,
      expanded,
      toggleExpand
    }
  }
})
</script>
<style scoped>
.v-list-item {
  min-height: 48px;
  font-weight: bold;
}

.active-item {
  background-color: #f8f8f8 !important;
}
</style>
