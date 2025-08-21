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
  { title: '請求ID', value: 'invoiceId' },
  { title: '顧客名', value: 'customerName' },
  { title: '台数', value: 'units' },
];



  const items = ref([
   { invoiceId: 'INV-001', customerName: '令和アーバントラスト株式会社', units: 3 },
  { invoiceId: 'INV-002', customerName: '万芳美知子', units: 1 },
  { invoiceId: 'INV-003', customerName: '小林電機産業', units: 5 },
  
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