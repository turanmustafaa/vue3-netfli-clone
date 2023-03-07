<template>
  <div class="modal" v-if="$store.state.isModalOpen">
    <div class="modal-content">
      <div class="top-side">
        <div class="bgImg">
          <img
            :src="`https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`"
            alt=""
          />
          <div class="bgBlur"></div>
        </div>
        <div class="btns">
          <a class="play" href=""
            ><font-awesome-icon icon="fa-solid fa-play" />Oynat</a
          >
          <a class="round" href=""
            ><font-awesome-icon icon="fa-solid fa-check"
          /></a>
          <a class="round" href=""
            ><font-awesome-icon icon="fa-solid fa-thumbs-up"
          /></a>
        </div>
      </div>
      <div class="bottom-side">
        <div class="left">
          <div class="first">
            <span style="color: green">%92 eşleşme</span>
            <span> {{currentMovie.release_date}}</span>
            <span style="border: 1px solid white; padding: 2px 5px">+18</span>
            <span style="border: 1px solid white; padding: 2px 5px">HD</span>
          </div>
          <div>
           {{currentMovie.overview}}
          </div>
        </div>
        <div class="right">
          <span>{{currentMovie.original_title}}</span>
          <span>Original language : {{currentMovie.original_language}}</span>
          <span>Vote Count : {{currentMovie.vote_count}}</span>
          <span>vote Average : {{currentMovie.vote_average}}</span>
          <span>Popularity : {{currentMovie.popularity}}</span>
        </div>
      </div>
      <button class="close-btn" @click="$store.state.isModalOpen = false">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentMovie() {
      return this.$store.state.currentMovie;
    },
  },
};
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal .modal-content {
  width: 60%;
  height: 95%;
  text-align: center;
  position: relative;
  background: black;
}
.modal .modal-content .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
  z-index: 2;
  color: black !important;
  /* border: 1px solid black; */
  border: none;
  border-radius: 50%;
  background: #181818;
  text-align: center;
}
.modal .modal-content .close-btn * {
  color: white !important;
  padding: 12px 15px;
}
.modal .modal-content .top-side {
  width: 100%;
  height: 75%;
  position: relative;
  overflow: hidden;
}

.modal .modal-content .top-side .bgImg {
  width: 100%;
  height: 100%;
}
.modal .modal-content .top-side .bgImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal .modal-content .top-side .bgImg .bgBlur {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0, 1));
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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.modal .modal-content .top-side .btns .play {
  background-color: white !important;
  color: black;
  padding: 6px 20px;
  border-radius: 3px;
}
.modal .modal-content .top-side .btns .play * {
  color: black !important;
  margin-right: 5px;
}
.modal .modal-content .top-side .btns > *:not(:last-child) {
  margin-right: 10px;
}
.modal .modal-content .top-side .btns .round {
  border: 1px solid white;
  padding: 10px;
  border-radius: 50%;
}
.modal .modal-content .bottom-side {
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 10px 10px;
}
.modal .modal-content .bottom-side > div {
    padding: 5px;
}
.modal .modal-content .bottom-side .left .first span {
  margin-right: 10px;
}
.modal .modal-content .bottom-side .left .first {
    margin-bottom: 10px;
}
.modal .modal-content .bottom-side .left {
    text-align: left;
}
.modal .modal-content .bottom-side .right span {
    display: flex;
    flex-direction: column;
    text-align: left;
}
</style>