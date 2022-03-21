import * as firebase from 'firebase';
import db from '@/firestore'
import router from '@/router/index';

const state = {
    user: {
        loggedIn: false,
        data: null
    }
};
const getters = {
    user(state) {
        return state.user
    }
};
const mutations = {
    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_USER(state, data) {
        state.user.data = data;
    }
};
const actions = {
    setUser(context, user){
        context.commit('SET_USER', user);
        context.commit("SET_LOGGED_IN", user !== null);
    },
    async login({ commit, state }, user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                router.replace({ path: "../components/dashboard" });
            })
            .catch((err) => {
                console.log(err)
            })
    },
    register({ commit }, user) { 
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                data.user.updateProfile({
                    displayName: user.name,
                }).then(() => { });
            })
    }
}


const authModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default authModule;