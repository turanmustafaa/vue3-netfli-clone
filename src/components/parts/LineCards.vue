<template>
    <h4 style="text-align: start; margin-left: 20px; margin-top: 10px;">{{ movieTypeText }}</h4>
    <div class="cards">
        <Carousel :items-to-show="5">
            <Slide v-for="i in movies" :key="i.id">
                  <!-- <Card v-for="slide in 5" :key="slide"/> -->
                  <Card :movieItem="i"  />
            </Slide>
            <!-- <template #addons>
                <navigation />
                <pagination />
            </template> -->
        </carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel,
    //  Pagination,
    //   Navigation,
      Slide  
    } from 'vue3-carousel'
import Card from '../paticals/Card.vue'
import axios from "axios"
export default {
    data() {
        return {
            movies : [],
            movieType : this.getMovieType,
            movieTypeText : this.getMovieType.replace("_", ' ').toUpperCase()
        }
    },
    components: {
        Card,
        Carousel,
        Slide,
        // Pagination,
        // Navigation,
    },
    created() {
        this.getData()
    },
    methods : {
       async getData() {
        await axios.get(`https://api.themoviedb.org/3/movie/${this.movieType}?api_key=3ceb8d709ef1cbfd377759543bb3aece`)
        .then(res => 
         this.movies = res.data.results
        )
        // console.log(this.movies)
        }
    },
    props : ["getMovieType"]
}
</script>

<style scoped>
.cards {
    width: 97%;
    margin:20px auto;
    transition: .3s ease all;
    height: auto;
}
.cards:hover {
    height: 420px;
    transition: .3s ease all;
}
</style>