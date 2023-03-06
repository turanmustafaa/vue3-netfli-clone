<template>
    <div class="header">
        <div class="logo">
            <a href="">
                <img src="../../assets/netflix_logo.png" alt="">
            </a>
        </div>
        <div  class="header-links">
            <div class="left">
                <a href="">Ana Sayfa</a>
                <a href="">Dizlier</a>
                <a href="">Filmler</a>
                <a href="">Listem</a>
            </div>
            <div class="right">
                <input v-model="inputData" ref="input" type="text" id="inp">
                <label style="margin-left: 10px;" @click="inputTransition"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></label>
                <div  class="user">
                    <a id="user" href=""><img src="../../assets/user.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData : "",
        }
    },
    methods: {
        inputTransition(){
            let input = this.$refs.input
            input.classList.toggle('fullsize')
            input.focus()
        }
    },
}
    
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2;
    background: linear-gradient(0deg,  rgba(0,0,0,0),rgb(0, 0, 0,0.8))
}
    .header .logo {
        width: 8%;
        height: auto;
        position: relative;
        display: inline-block;
    }
    .header .logo img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    .header .header-links {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-items: flex-end;
    }
    .header .header-links .left a {
        margin-left: 10px;
    }
    .header .header-links .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .header .header-links .right input {
        width: 0;
        border: none;
        transition: .7s ease-in-out all;
        color: black;
    }
    .header .header-links .right input.fullsize {
        width: 30%;
    }
    .header .header-links .right .user {
        width: 5%;
        height: 5%;
        display: inline;
        margin-left: 10px;
    }
    .header .header-links .right a img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
</style>

