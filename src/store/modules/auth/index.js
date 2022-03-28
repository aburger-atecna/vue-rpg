import * as firebase from 'firebase';
import db from '@/firestore'
import router from '@/router/index';

const state = {
    user: {
        loggedIn: false,
        data: null,
        id: null,
    }
};
const getters = {
    user(state) {
        return state.user
    },
    userId(state) {
        return state.user.id
    }
};
const mutations = {
    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_USER(state, data) {
        state.user.data = data;
    },
    SET_USER_ID(state, data) {
        state.user.id = data.uid
    }
};
const actions = {
    authAction({ commit }) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                commit("SET_USER", user);
                commit("SET_USER_ID", user);
                commit("SET_LOGGED_IN", true)
            } else {
                commit("SET_USER", null);
                commit("SET_LOGGED_IN", false)
            }
        });
    },
    login({ commit }, user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                commit("SET_USER", data.user);
                commit("SET_USER_ID", data.user);
                commit("SET_LOGGED_IN", true)
            })
            .then(() => {
                router.replace({
                    name: "Dashboard"
                });
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
    },
    signOut({ commit }) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                router.replace({
                    name: "home",
                });
            })
            .then(() => {
                commit('heros/CLEAN_HEROS_ARRAY', null, { root: true })
            });
    },
}


const authModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default authModule;