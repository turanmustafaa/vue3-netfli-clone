<template>
  <div>
    <div class="content">
      <div class="content-header">
        <div class="img">
          <img src="../../../src/assets/netflix_logo.png" alt="" />
        </div>
        <div class="btn">
          <button>Log In</button>
        </div>
      </div>
      <div class="content-body">
        <div class="texts">
          <h2 style="font-size : 45px; font-weight : 900;">Sınırsız film, dizi ve çok daha fazlası.</h2>
          <h4 style="font-size : 35px">İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h4>
          <h5 style="font-size : 25px">
            İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek
            için e‑posta adresinizi girin.
          </h5>
        </div>
        <form @submit.prevent="registerFnc">
          <input v-model="userValues.userName" type="text" placeholder="kullanıcı adı" />
          <input v-model="userValues.eMail" type="text" placeholder="e-posta" />
          <input v-model="userValues.password" type="password" placeholder="şifre" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { collection, setDoc , doc } from "firebase/firestore";
import { db} from '@/firebase'
export default {
    data() {
        return {
            userValues : {
                userName : null,
                eMail : null,
                password : null,
                isAuthenticated : false,
                likes : [],
            }
        }
    },
    methods : {
       async registerFnc() {
            const newUser = doc(collection(db, "users"));
            const user = newUser.id
            await setDoc(newUser, {...this.userValues , user});
            console.log(newUser.id)
        }
    }

}
</script>
<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  background: url('../../../src/assets/login_bg.jpg') no-repeat;
  background-color: rgba(0, 0, 0, 0.7) ;
  background-blend-mode: darken;
  background-size: 100vw 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .content-header {
    top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  align-items: center;
  height: 10%;
}
.content .content-header .img {
  width: 10%;
  height: 100%;
}
.content .content-header .img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content .content-header .btn button {
  background: #e50914;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  padding: 16px;
}
.content .content-body {
    width: 40%;
    display: flex;
    flex-direction: column;
   align-items: center;
}
.content .content-body .texts {
    text-align: center;
    margin-bottom: 20px;
}
.content .content-body .texts > * {
    margin-bottom: 10px;
}
.content .content-body form {
       display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
}
.content .content-body form > * {
    margin-bottom: 10px;
}
.content .content-body form input[type="text"], .content .content-body form input[type="password"] {
            border: 0;
    border-radius: 4px;
    color: black;
    height: 50px;
    line-height: 50px;
    padding: 16px 20px 0;
}
.content .content-body form button[type="submit"] {
        background: #E50914;
        border: none;
        border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    margin: 24px 0 12px;
        padding: 16px;
    }
</style>