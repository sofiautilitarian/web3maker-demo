<template>
    <v-container class='custom-padding'>
        
        
        
        <v-row>

            <UnsettledOrders class='v-col-5' />
            <WorkerInformation class='v-col-6' />

        </v-row>
    </v-container>


</template>
<script>
import UnsettledOrders from './UnsettledOrders.vue';
import WorkerInformation from './WorkerInformation.vue';
</script>
<style>
.custom-padding {
  padding: 0 64px !important;
}
</style>