import { createStore } from "vuex";

const store = createStore({
    state : {
        isModalOpen : false,
        currentMovie : null
    },
    mutations : {
        updateCurrentMovie(state,currentMovie) {
            state.currentMovie = currentMovie
            console.log(currentMovie)
        }
    }
})

export default store;