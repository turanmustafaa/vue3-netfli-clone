<template>
    <globalHeader />
    <HomeBanner />
    <div class="lines">
        <LineCards  :getMovieType="i"  v-for="(i,index) in getTypes" :key="index" />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
// import HomeBanner from "@/components/parts/HomeBanner.vue"
const HomeBanner = defineAsyncComponent({
   loader : () =>  import('@/components/parts/HomeBanner.vue'),
   delay : 100
})
import LineCards from '../parts/LineCards.vue'
export default {
    data() {
        return {
            getTypes : ["popular","top_rated","upcoming"]
        }
    },
    components : {
        HomeBanner,
        LineCards
    },
}
</script>
<style scoped>
.lines {
    overflow: hidden;
    margin-top: -130px;
    z-index: 3;
}
</style>