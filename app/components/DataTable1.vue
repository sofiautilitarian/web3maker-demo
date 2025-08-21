<template>
  <div class="logo-en-new">
  <v-data-table :headers="headers" :items="items">
    <template v-slot:item.progress="{ item }">
      <v-progress-linear
        :color="color(item.progress)"
        :model-value="item.progress"
        height="25"
      >
        <template v-slot:default="{ value }">
          <strong>{{ value }}%</strong>
        </template>
      </v-progress-linear>
    </template>

    <template v-slot:item.actions="{ item }">
      

      
    </template>
  </v-data-table>
  

  <v-dialog v-model="dialog" :activator="activator" max-width="500">
    <v-confirm-edit
      ref="confirm"
      v-model="model"
      ok-text="save"
      @cancel="dialog = false"
      @save="save"
    >
      <template v-slot:default="{ model: proxyModel, actions }">
        <v-card title="Modify Data">
          <v-card-text>
            <v-text-field
              v-model="proxyModel.value.name"
              label="Modify name"
            ></v-text-field>

            <v-number-input
              v-model="proxyModel.value.progress"
              label="Modify progress"
              max="100"
              min="0"
            ></v-number-input>
          </v-card-text>

          <template v-slot:actions>
            <v-spacer></v-spacer>
            <component :is="actions"></component>
          </template>
        </v-card>
      </template>
    </v-confirm-edit>
  </v-dialog>
  </div>
</template>
<script setup>
  // v-dialog
  const dialog = ref(false)
  const activator = ref(null)

  // v-confirm-edit
  const confirm = ref(null)

  const model = ref({
    name: '',
    progress: 0,
  })

  const selected = ref()
const headers = [
  { title: 'シンボル画像', value: 'symbolImage' },
  { title: '発生日', value: 'occurrenceDate' },
  { title: '報酬種別', value: 'rewardType' },
  { title: '台数', value: 'units' },
  { title: 'SISC/USDロジック', value: 'siscUsdLogic' },
  { title: 'SISC/USD', value: 'siscUsd' },
  { title: 'USD/各ライン', value: 'usdPerLine' },
  { title: 'USD/JPY', value: 'usdJpy' },
  { title: 'リワード合計', value: 'totalReward' },
  { title: 'リワード合計(JPY)', value: 'totalRewardJpy' },
  { title: '1台あたりリワード', value: 'rewardPerUnit' },
  { title: '1台あたりリワード(JPY)', value: 'rewardPerUnitJpy' },
  { title: '1年度表利益日', value: 'oneYearProfitDate' },
  { title: '3年度表利益日', value: 'threeYearProfitDate' },
];



  const items = ref([
    // { id: 1, name: 'Tumwater', progress: 50 },
    // { id: 2, name: 'Siena', progress: 73 },
    // { id: 3, name: 'Cold Harbor', progress: 100 },
    // { id: 4, name: 'Cairns', progress: 92 },
    // { id: 5, name: 'Allentown', progress: 40 },
  ])

  // Adjust progress bar color based on progress
  const color = computed(() => progress => {
    if (progress === 100) return 'green-lighten-2'
    if (progress >= 90) return 'green-lighten-4'
    if (progress >= 70) return 'light-green-lighten-2'
    if (progress >= 50) return 'light-green-lighten-4'
    return 'blue-grey'
  })

  // Register current, hovered row to activator
  // Preferrably called before edit()
  function register (event) {
    activator.value = event.currentTarget
  }

  // Select & load data to be edited
  function edit (item) {
    selected.value = item.id
    model.value = { name: item.name, progress: item.progress }
  }

  // Update item data
  function save () {
    dialog.value = false

    items.value = items.value.map(item =>
      item.id === selected.value
        ? { ...item, name: model.value.name, progress: model.value.progress }
        : item
    )
  }

  function remove (id) {
    items.value = items.value.filter(item => item.id !== id)
  }
</script>
<style scope>

</style>