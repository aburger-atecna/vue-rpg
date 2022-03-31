<template>
  <div>
      INVENTORY
    <div v-for="(item, index) in items" :key="item">
      <div>
        Item : <span>{{ item.name }}</span>
      </div>
      <div>
        Effect :
        <div v-for="(value, name) in item.bonus" :key="name">
          {{ name }} : {{ value }}
        </div>
      </div>
      <el-button type="succes" @click="equipItem(item, index)">Equip</el-button>
    </div>
  </div>
 
</template>
<script>
import { mapGetters } from "vuex";
import statsHero from "@/components/hero/statsHero.vue";

export default {
  components: { statsHero },
  data() {
    return {};
  },
  created() {
  },
  computed: {
    ...mapGetters({
      items: "items/items"
    })
  },
  methods: {
    equipItem(item, index) {
        console.log(index)
      this.$store.dispatch("items/addEquipement", item);
      this.$store.dispatch("items/removeFromInventory", index);
    },
    clearEquipment(){
      this.$store.dispatch("items/removeEquipement");
    },
  },
};
</script>