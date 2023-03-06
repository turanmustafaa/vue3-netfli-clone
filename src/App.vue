<template>
  <router-view></router-view>
  <teleport to='body'>
        <cardDetailModal />
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
</style>
