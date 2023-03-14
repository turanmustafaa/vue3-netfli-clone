<template>
  <div>
      <div class="header">
        <router-link to="/">
            <img src="../../../src/assets/netflix_logo.png" alt="">
        </router-link>
    </div>
    <div class="body">
        <div class="content">
            <div class="content-body">
                <h2>Log In</h2>
                <form @submit.prevent="loginFnc">
                    <input v-model="userData.eMail" type="text" placeholder="e-posta">
                    <input v-model="userData.password" type="password" placeholder="parola">
                    <button type="submit">Log In</button>
                </form>
                <div style="color: #737373 ">Do u wanna join to Netflix ? <router-link to="/register">Now Register!</router-link></div>
                <p style="color: #737373 ">Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. </p>
                <a href="#">daha fazlasını ögrenin</a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { doc, getDoc} from "firebase/firestore";
import { db} from '@/firebase'
export default {
    data() {
        return {
            userData : {
                eMail : null,
                password : null,
            }
        }
    },
    methods : {
        async loginFnc() {
            const docRef = doc(db, "users","userid");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
                    }
    }
}
}
</script>
<style scoped>
    .header {
        position: fixed;
        display: flex;
        height: 12%;
        width: 100%;
    }
    .header img {
        height: 100%;
    }
    .body {
        background: url('../../../src/assets/login_bg.jpg') no-repeat;
        width: 100vw;
        height: 100vh;
        background-size: 100vw 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
         background-color: rgba(0, 0, 0, 0.4) ;
  background-blend-mode: darken;
        
    }
    .body .content {
         background-color: rgba(0,0,0,.75);
         padding: 3% 5%;
         max-width: 25%;
    }
    .body .content .content-body {
        display: flex;
        flex-direction: column;
    }
    .body .content .content-body > * {
        margin-bottom: 10px;
    }
    .body .content .content-body form {
        display: flex;
        flex-direction: column;
    }
    .body .content .content-body form input[type="text"] , .body .content .content-body form input[type="password"] {
        border: 0;
    border-radius: 4px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 16px 20px 0;
    }
    .body .content .content-body form button[type="submit"] {
        background: #E50914;
        border: none;
        border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    margin: 24px 0 12px;
        padding: 16px;
    }
    .body .content .content-body form > *:not(:last-child) {
        margin-bottom: 10px;
    }
</style>