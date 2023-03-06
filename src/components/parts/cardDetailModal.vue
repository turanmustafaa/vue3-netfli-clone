<template>
        <div class="modal" v-if="$store.state.isModalOpen">
           <div class="modal-content">
            <div class="top-side">
                <div class="bgImg">
                    <img :src="`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`" alt="">
                    <div class="bgBlur"></div>
                </div>
                <div class="btns">
                    <a href=""><font-awesome-icon icon="fa-solid fa-circle-play" style="margin-right: 5px;" />Oynat</a>
                    <a href=""><font-awesome-icon icon="fa-solid fa-check" /></a>
                    <a href=""><font-awesome-icon icon="fa-solid fa-thumbs-up" /></a>
                </div>
            </div>
            <div class="bottom-side">

            </div>
            <!-- <button @click="$store.state.isModalOpen = false">kapat</button> -->
           </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            currentMovie() { 
                return this.$store.state.currentMovie 
            }
        }
    }
</script>
<style>
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal .modal-content {
    width: 40%;
    height: auto;
    text-align: center;
}
.modal .modal-content .top-side {
    width: 100%;
    height: 60%;
    position: relative;
}

.modal .modal-content .top-side .bgImg {
    width: 100%;
    height: 100%;
}
.modal .modal-content .top-side .bgImg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.modal .modal-content .top-side .bgImg .bgBlur {
    background: linear-gradient(180deg,  rgba(0,0,0,0),rgb(0, 0, 0,1));
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
}
.modal .modal-content .top-side .btns {
    position: absolute;
    bottom: 0;
    z-index: 2;
}
</style>