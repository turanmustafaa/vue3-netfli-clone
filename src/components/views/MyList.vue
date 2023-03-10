<template>
    <globalHeader />

</template>

<script>
import {db} from '@/firebase'
import { collection, getDocs } from "firebase/firestore";
export default {

    async mounted() {
        const querySnapshot = await getDocs(collection(db,"users"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        });
    }
}
</script>