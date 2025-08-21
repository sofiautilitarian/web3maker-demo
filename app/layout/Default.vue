<template>
    
    <TopNavDrawer/>
    <spacer/>
    <spacer/>
    <spacer/>
    <Reward/>
    <Log/>
    <spacer/>
    <spacer/>
    <Grid/>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Reward from '~/components/Reward.vue';
import Log from '~/components/Log.vue';
import TopNavDrawer from '~/components/TopNavDrawer.vue';
import spacer from '~/components/spacer.vue';
import Grid from '~/components/Grid.vue';


export default defineComponent({
    setup () {
        

        return {}
    }
})



</script>

<style scoped>

</style>