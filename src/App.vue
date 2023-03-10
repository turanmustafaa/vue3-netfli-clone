<template>

  <router-view v-slot=" { Component }">
    <!-- <transition name="fade"
    enter-active-class="animate__animated animate__fadeInLeft" 
    leave-active-class="animate__animated animate__fadeOutRight"> -->
      <component :is="Component"  />
    <!-- </transition> -->
  </router-view>

  <teleport to='body'>
    <transition name="modal">
    <cardDetailModal />
    </transition>
  </teleport> 

</template>

<script>
import cardDetailModal from './components/parts/cardDetailModal.vue';

export default {
  components : {
        cardDetailModal
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
} */

.modal-enter-active,
.modal-leave-active {
  transition: all .4s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

</style>
