import db from '@/firestore';
import * as firebase from 'firebase';

const state = {
    user: {
        loggedIn: false,
        data: null,
        id: ''
    },
    heros: [],
    activeHero: []
};
const getters = {
    user(state) {
        return state.user
    },
    heros(state) {
        return state.heros
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
    },
    async login({ commit }, user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                this.$router.replace({ name: "createHero" });
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
    fetchHeros({ commit, state }, user) {
        const uid = user.uid;
        firebase.firestore().collection("heros").where('id', '==', uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((hero) => {
                state.heros.push(hero.data());
            });
        })
        .catch((err) => {
            console.log(err)
        })
    },
    fetchUser({ commit }, user) {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
            commit("SET_USER", {
                displayName: user.displayName,
                email: user.email
            });
        } else {
            commit("SET_USER", null);
        }
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