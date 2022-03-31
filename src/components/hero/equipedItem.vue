<template>
  <div>
    Equiped items :
    <div v-for="(item, index) in equipedItems" :key="item">
        {{ item.name }}
        <button @click="unEquip(item, index)">Unequip</button>
    </div>
    value total : {{ calculBonus }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  mounted() {},
  created() {},
  computed: {
    ...mapGetters({
      items: "items/items",
      equipedItems: "items/equipedItems",
    }),
  },
  methods: {
    clearEquipment() {
        this.$store.dispatch("items/removeEquipement");
    },
    unEquip(item, index){
        this.$store.dispatch("items/unEquipItem", item, index);
    }
  },
  watch: {},
};
</script>

<style scoped lang="scss">
</style>