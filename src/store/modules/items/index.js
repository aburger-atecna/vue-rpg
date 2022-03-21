import axios from "axios";

const state = {
  rpgEquipments: [],
  weapons: [],
};

const mutations = {
  UPDATE_ALL_EQUIPMENTS(state, payload) {
    state.rpgEquipments = payload;
  },
};

const actions = {
  getEquipments({ commit }) {
    axios
      .get('https://rpgvue-0248.restdb.io/rest/equipments', {
        headers: {
          "content-type": "application/json",
          "x-apikey": "b41d74ebbda3dfdb167e1af822a02a5938968",
          "cache-control": "no-cache"
        }
      })
      .then((response) => {
        commit("UPDATE_ALL_EQUIPMENTS", response.data)
        console.log(state.rpgEquipments)
      });
  },
};

const getters = {
  rpgEquipments: (state) => state.rpgEquipments,
};

const itemModule = {
  state,
  mutations,
  actions,
  getters,
};
export default itemModule;
