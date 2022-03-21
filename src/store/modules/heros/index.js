import * as firebase from 'firebase';
import db from '@/firestore'


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
  hero_key: "",
  heroList: {}
};

const mutations = {
  FETCH_HEROBLANK(state, payload) {
    state.heroBlank = payload;
  },
  setUserKey(state, key) {
    state.user_key = key;
  },
  updateUserList(state, { key, user }) {
    Vue.set(state.list, key, user);
  }
};

const actions = {
  async addNewHero({ commit }, payload) {
    firebase.firestore().collection('heros').add({
      name: payload.name,
      race: payload.race,
      sexe: payload.sexe,
      id: firebase.auth().currentUser.uid
    }).then(() => {
      alert("User successfully created!");
    }).catch((error) => {
      console.log(error);
    });
  }
};

const getters = {
  heroBlank: (state) => state.heroBlank,
  currentHero(state) {
    return state.heroList[state.hero_key];
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
