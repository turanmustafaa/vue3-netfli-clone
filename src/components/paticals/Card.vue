<template>
    <div @click="$store.commit('updateCurrentMovie',movie)" class="card">
        <div class="img">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"  alt="">
        </div>
        <div class="info">
            <div class="descs">
                <div class="btns">
                    <a class="btn" href=""><font-awesome-icon icon="fa-solid fa-circle-play" /></a>
                    <a class="btn" href=""><font-awesome-icon icon="fa-solid fa-check" /></a>
                    <a class="btn" href=""><font-awesome-icon icon="fa-solid fa-thumbs-up" /></a>
                </div>
                <div>
                    <a @click.prevent="$store.state.isModalOpen=true" class="btn" href="#"><font-awesome-icon icon="fa-solid fa-angle-down" /></a>
                </div>
            </div>
            <div class="contents">
                <span style="color: chartreuse !important;">97% eslesme</span>
                <span style="padding: 3px 6px; border: 1px solid white;">+18</span>
                <span>4 sezon</span>

            </div>
            <div class="tags">
                <span>Adrenalin Dolu</span>
                <span>Heyecanlı</span>
                <span>Sürükleyici</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components : {
    },
    data() {
        return {
            movie : this.movieItem
        }
    },
    props : ["movieItem"],

    created() {

},
methods : {
    runConsole() {
        console.log(this.movie)
    }
}
}

</script>
<style>

</style>