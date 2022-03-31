import axios from "axios";

const state = {
  equipedItems: [],
  items: [
    {
      name: "shield",
      bonus: {
        atk: 0,
        def: 5,
        life: 5,
        magicAtk: 0,
        mana: 0,
      },
    },
    {
      name: "sword",
      bonus: {
        atk: 10,
        def: 0,
        life: 0,
        magicAtk: 0,
        mana: 0,
      },
    },
  ],
};

const mutations = {
  ADD_TO_INVENTORY(state, item) {
    state.items.push(item);
  },
  UPDATE_ALL_EQUIPMENTS(state, payload) {
    state.rpgEquipments = payload;
  },
  EQUIP_ITEM(state, payload) {
    state.equipedItems.push(payload)
  },
  REMOVE_ITEM(state, payload) {
    state.equipedItems = []
  },
  REMOVE_ITEM_INVENTORY(state, index) {
    state.items.splice(index, 1);
  },
  REMOVE_ITEM_EQUIPMENT(state, index) {
    state.equipedItems.splice(index, 1);
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
  addEquipement({ commit }, payload) {
    commit("EQUIP_ITEM", payload)
  },
  removeEquipement({ commit }, payload) {
    commit("REMOVE_ITEM", payload)
  },
  removeFromInventory({ commit }, payload) {
    console.log(payload)
    commit("REMOVE_ITEM_INVENTORY", payload)
  },
  unEquipItem({commit}, item, index){
    commit("ADD_TO_INVENTORY", item)
    commit("REMOVE_ITEM_EQUIPMENT", index)
  }
 };

const getters = {
  items(state) {
    return state.items
  },
  equipedItems(state) {
    return state.equipedItems
  }
};

const itemModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
export default itemModule;
