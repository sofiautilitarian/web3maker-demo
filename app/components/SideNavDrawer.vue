<template>
  <div class="pa-0">
    <!-- STAGING MODE Button -->
    <v-list-item class="pa-2">
      <v-btn color="warning" block elevation="1" style="font-weight: bold;">
        <span style="color: black; margin-right: 12px; font-size: 12px; font-weight: bold;">AWS</span>
        <span style="color: black;">STAGING MODE</span>
      </v-btn>
    </v-list-item>

    <v-list density="compact" nav>
      <template v-for="(item, index) in navItems" :key="index">
        <!-- Items with children (expandable groups) -->
        <v-list-group v-if="item.children.length > 0" 
          :value="expandedGroup === index"
          @click="handleGroupClick(index)">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :class="{ 'active-item': expandedGroup === index }">
              <template #prepend>
                <v-icon :icon="item.icon" class="mr-3"></v-icon>
              </template>
              <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>

          <!-- Child items with dummy data -->
          <v-list-item v-for="(child, i) in item.children" :key="`child-${i}`" 
            @click.stop="handleChildClick(child.title)"
            :class="{ 'active-item': selected === child.title }">
            <v-list-item-title class="pl-4">{{ child.title }}</v-list-item-title>
            <!-- Dummy content for child items -->
            <div v-if="selected === child.title" class="pa-4 mt-2 bg-grey-lighten-4 rounded">
              <p class="text-caption">{{ child.dummyData }}</p>
            </div>
          </v-list-item>
        </v-list-group>

        <!-- Items without children (single items) -->
        <v-list-item v-else 
          @click="handleSingleItemClick(item.title, index)" 
          :class="{ 'active-item': expandedGroup === index }">
          <template #prepend>
            <v-icon :icon="item.icon" class="mr-3"></v-icon>
          </template>
          <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          
          <!-- Dummy content for single items -->
          <div v-if="expandedGroup === index" class="pa-4 mt-2 bg-grey-lighten-4 rounded">
            <p class="text-caption">{{ item.dummyData }}</p>
          </div>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
const expandedGroup = ref<number | null>(null)

const navItems = [
  {
    title: 'システム',
    icon: 'mdi-cog',
    dummyData: 'システム管理画面 - サーバー設定、データベース接続、API設定などを管理します。',
    children: [
      { 
        title: 'システム設定',
        dummyData: 'システム設定画面 - 基本設定、セキュリティ設定、通知設定を変更できます。'
      },
      { 
        title: 'ログ',
        dummyData: 'ログ管理画面 - システムログ、エラーログ、アクセスログを確認できます。'
      }
    ]
  },
  {
    title: '入出金消込',
    icon: 'mdi-cash',
    dummyData: '入出金消込管理 - 取引の照合と記録を管理します。',
    children: [
      { 
        title: '入金',
        dummyData: '入金管理画面 - 顧客からの入金を確認し、消込処理を行います。'
      },
      { 
        title: '出金',
        dummyData: '出金管理画面 - 出金依頼の承認と処理を管理します。'
      }
    ]
  },
  {
    title: 'Customers',
    icon: 'mdi-account-group',
    dummyData: '顧客管理システム - 顧客情報の登録、編集、検索機能。現在1,250名の顧客が登録されています。',
    children: []
  },
  {
    title: 'セールス',
    icon: 'mdi-sale',
    dummyData: 'セールス管理 - 営業活動の追跡、売上分析、目標管理。今月の売上目標達成率: 85%',
    children: []
  },
  {
    title: 'トレーディング',
    icon: 'mdi-chart-line',
    dummyData: 'トレーディングプラットフォーム - リアルタイム価格、取引履歴、ポートフォリオ管理。現在BTC: ¥4,580,000',
    children: []
  },
  {
    title: 'マイニングブースト',
    icon: 'mdi-server',
    dummyData: 'マイニング効率化システム - ハッシュレート監視、収益性分析。現在のハッシュレート: 125 TH/s',
    children: []
  },
  {
    title: '代理店',
    icon: 'mdi-office-building',
    dummyData: '代理店管理 - パートナー情報、手数料設定、業績管理。アクティブ代理店: 45社',
    children: []
  },
  {
    title: '生産',
    icon: 'mdi-factory',
    dummyData: '生産管理システム - 製造スケジュール、品質管理、在庫状況。今日の生産効率: 92%',
    children: []
  },
  {
    title: 'ワーカー',
    icon: 'mdi-account-hard-hat',
    dummyData: 'ワーカー管理 - スタッフのシフト管理、勤怠管理、パフォーマンス追跡。現在オンライン: 28名',
    children: []
  },
  {
    title: 'セキュリティ',
    icon: 'mdi-shield-lock',
    dummyData: 'セキュリティセンター - アクセス制御、監査ログ、脅威検出。アクティブな脅威: 0件',
    children: []
  },
  {
    title: 'ショップ',
    icon: 'mdi-store',
    dummyData: 'オンラインショップ管理 - 商品管理、注文処理、在庫管理。今日の注文数: 156件',
    children: []
  },
  {
    title: 'コイン',
    icon: 'mdi-currency-btc',
    dummyData: '仮想通貨管理 - ウォレット残高、取引履歴、価格アラート。総保有額: ¥12,450,000',
    children: []
  },
  {
    title: 'リワード',
    icon: 'mdi-gift',
    dummyData: 'リワードプログラム - ポイント管理、特典設定、利用履歴。今月配布ポイント: 45,600pt',
    children: []
  }
]

// Handle clicking on groups with children
const handleGroupClick = (index: number) => {
  // If this group is already expanded, close it
  if (expandedGroup.value === index) {
    expandedGroup.value = null
    selected.value = ''
  } else {
    // Close any other group and open this one
    expandedGroup.value = index
    selected.value = ''
  }
}

// Handle clicking on child items
const handleChildClick = (title: string) => {
  // If this child is already selected, close it
  if (selected.value === title) {
    selected.value = ''
  } else {
    selected.value = title
  }
}

// Handle clicking on single items (no children)
const handleSingleItemClick = (title: string, index: number) => {
  // If this item is already expanded, close it
  if (expandedGroup.value === index) {
    expandedGroup.value = null
  } else {
    // Close any other item and open this one
    expandedGroup.value = index
    selected.value = ''
  }
}
</script>

<style scoped>
.v-list-item {
  min-height: 48px !important;
}

.active-item {
  background-color: #f8f8f8 !important;
}

.font-weight-bold {
  font-weight: bold !important;
}

.pl-4 {
  padding-left: 1rem !important;
}

.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
}

.text-caption {
  font-size: 0.75rem !important;
  line-height: 1.25rem !important;
}

.rounded {
  border-radius: 4px !important;
}
</style>