import * as firebase from 'firebase';
import db from '@/firestore';


const state = {
  heroBlank: {
    name: '',
    sexes: [
      'men',
      'women'
    ],
    races: [
      'orc',
      'human',
      'elf'
    ],
    class: [
      'warrior',
      'wizard',
      'bowman',
      'priest',
      'Thief'
    ]
  },
  heros: []
};

const mutations = {
  CLEAN_HEROS_ARRAY(state) {
    state.heros = [];
    console.log('clean:', state.heros)
  },
  ADD_HEROS(state, value){
    console.log(value)
    state.heros.push(value);
  }
};

const actions = {
  async addNewHero({ commit }, payload) {
    firebase.firestore().collection('heros').add({
      name: payload.name,
      race: payload.race,
      sexe: payload.sexe,
      class: payload.class,
      id: firebase.auth().currentUser.uid
    }).then(() => {
      alert(`User ${payload.name} successfully created!`);
    }).catch((error) => {
      console.log(error);
    });
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
  removeHero({ commit, state }, user) {
    firebase.firestore().collection("heros").where('id', '==', user)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        })
      })
      .then(() => {
        commit('CLEAN_HEROS_ARRAY');
      })
      .catch((err) => {
        console.log(err)
      })
  }
};

const getters = {
  heroBlank: (state) => state.heroBlank,
  heros(state) {
    return state.heros
  }
};

const productModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
