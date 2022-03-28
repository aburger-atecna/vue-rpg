import * as firebase from 'firebase';
import db from '@/firestore';
import router from '@/router/index';

const state = {
  heroBlank: {
    name: '',
    sexes: [
      'men',
      'women'
    ],
    races: [
      {
        name: 'orc',
        subClass: ['warrior', 'wizard', 'bowman']
      },
      {
        name: 'human',
        subClass: ['warrior', 'priest', 'thief']
      },
      {
        name: 'elf',
        subClass: ['wizard', 'bowman', 'priest']
      }
    ],
    stats: {
      life: '',
      mana: '',
      atk: '',
      def: '',
      magicAtk: '',
      lvl: '',
      exp: ''
    }
  },
  heros: []
};

const mutations = {
  CLEAN_HEROS_ARRAY(state) {
    state.heros = [];
  },
  ADD_HEROS(state, value) {
    state.heros = value;
  },
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
      alert(`User ${payload.name} successfully created!`)
      router.replace({
        name: "Dashboard"
      })
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchHeros({ commit, state }, user) {
    const uid = user.id;
    console.log('ici', uid)
    firebase.firestore().collection("heros").where('id', '==', uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((hero) => {
          commit('ADD_HEROS', hero.data())
          console.log('fetched')
        });
      })
      .catch((err) => {
        console.log(err)
      })
  },
  removeHero({ commit, state }, user) {
    const uid = user.id;
    firebase.firestore().collection("heros").where('id', '==', uid)
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
