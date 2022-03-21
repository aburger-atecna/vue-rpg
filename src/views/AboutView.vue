<template>
  <div class="home">
    <itemCard 
      v-for="(item, i) in items" 
      :key="i"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import itemCard from "../components/inventory/itemCard.vue";
export default {
  name: "homeView",
  components: {
    itemCard 
  },
  computed: {
    ...mapGetters({
      items: "rpgEquipments",
    }),
  },
  created() {
    this.$store.dispatch("getEquipments");
  },
};
</script>
