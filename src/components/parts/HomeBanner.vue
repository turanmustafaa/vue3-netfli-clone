<template>
    <div class="mainpage">
        <div class="img">
            <img :src="`https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`" >
            <!-- <img src="https://picsum.photos/1440/1080" alt=""> -->
        </div>
        <div class="absolutepart">
            <div class="desc">
                <p>{{bannerMovie.tagline}}</p>
            </div>
            <div class="btns">
                <button><font-awesome-icon style="margin-right: 10px;" icon="fa-solid fa-play" />Oynat</button>
                <button @click="updateStateMovie"><font-awesome-icon style="margin-right: 10px;" icon="fa-solid fa-circle-info" />Daha fazla
                    Bilgi</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import store from '@/store'
export default {
    data() {
        return {
            randomNumberVal : null,
            bannerMovie : "",
        }
    },
    methods: {
        async getBannerData() {
            await axios.get(`https://api.themoviedb.org/3/movie/${this.randomNumberVal}?api_key=3ceb8d709ef1cbfd377759543bb3aece`)
                .then(res =>
                   this.bannerMovie = res.data
                ).catch(() => {
                    this.randomNumberVal = 11
                    this.getBannerData()
                })
            console.log(this.randomNumberVal)
            console.log(this.bannerMovie)
        },
        async getRandomNumber(min,max) {
                this.randomNumberVal = await Math.floor(Math.random() * (max - min) + min);  
        },
        updateStateMovie() {
            store.commit('updateCurrentMovie',this.bannerMovie)
            store.state.isModalOpen = !store.state.isModalOpen
        }
        
    },
    mounted() {
        // this.getBannerData(),
        this.getRandomNumber(0,200)
    },
    watch : {
        randomNumberVal(oldVal,newVal){
            if(oldVal != newVal) {
                this.getBannerData();
            }
        }
    }
}
</script>
<style>
.mainpage {
    width: 100%;
    height: 100vh;
    position: relative;
    /* overflow: hidden; */
}

.mainpage .img {
    width: 100%;
    height: 100%;
}

.mainpage .img::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8))
}

.mainpage .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mainpage .absolutepart {
    position: absolute;
    width: 30%;
    top: 50%;
    font-size: 24px;
}

.mainpage .absolutepart .btns {
    margin-top: 20px;
}

.mainpage .absolutepart .btns * {
    color: black;
    font-size: 20px;
}

.mainpage .absolutepart .btns button {
    padding: 8px 20px;
}

.mainpage .absolutepart .btns button:nth-child(odd) {
    margin-right: 10px;
}</style>