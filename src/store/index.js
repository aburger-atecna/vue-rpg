import { createStore } from "vuex";
import heros from "./modules/heros";
import items from "./modules/items";
import auth from "./modules/auth";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    heros,
    items,
    auth,
  },
  plugins: [createPersistedState()]
});
