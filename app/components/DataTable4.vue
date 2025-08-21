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
  { title: 'サービス名', value: 'serviceName' },
  { title: 'ワーカーステータス', value: 'workerStatus' },
  { title: '前回回答有無', value: 'hasPreviousResponse' },
  { title: 'ワーカー数', value: 'workerCount' },
];



  const items = ref([
    { serviceName: '全体', workerStatus: '稼働中', hasPreviousResponse: '有り', workerCount: 13776 },
  { serviceName: '全体', workerStatus: '準備中', hasPreviousResponse: '有り', workerCount: 684 },
  { serviceName: '全体', workerStatus: '停止中', hasPreviousResponse: '有り', workerCount: 138 },
  { serviceName: '年間購入', workerStatus: '稼働中', hasPreviousResponse: '有り', workerCount: 12835 },
  { serviceName: '年間購入', workerStatus: '準備中', hasPreviousResponse: '有り', workerCount: 50 },
  { serviceName: '月間購入', workerStatus: '稼働中', hasPreviousResponse: '有り', workerCount: 1 },
  { serviceName: '送付', workerStatus: '稼働中', hasPreviousResponse: '有り', workerCount: 938 },
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