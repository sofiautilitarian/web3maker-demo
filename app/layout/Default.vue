<template>
    <div>
    <TopNavDrawer/>
    <spacer/>
    <spacer/>
    <spacer/>
    <Reward/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Reward from '~/components/Reward.vue';

export default defineComponent({
    setup () {
        

        return {}
    }
})


import TopNavDrawer from '~/components/TopNavDrawer.vue';
import spacer from '~/components/spacer.vue';
</script>

<style scoped>

</style>