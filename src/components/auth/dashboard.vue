<template>
  <div class="box-card myH-stats">
    <div class="myH-stats__header">
      <span>Caracteristics</span>
    </div>
    <div class="myH-stats__body">
      <template v-if="heros">
        <div class="myH-stats__body--top">
          <h1 class="myH-stats__title">{{ heros.name }}</h1>
          <h3 class="myH-stats__subTitle">
            <span>{{ heros.race }}</span
            >,
            <span>{{ heros.class }}</span>
          </h3>
        </div>
        <el-divider border-style="dashed" />
        <div class="myH-stats__body--center">
          <div>
            <span>Level : </span
            ><span class="myH-stats__subTitle"> {{ heros.level.number }}</span>
            <div class="myH-stats__progress">
              <span> Experience : </span>
              <el-progress
                :text-inside="true"
                :stroke-width="25"
                :percentage="heros.level.exp"
                status="success"
              />
            </div>
          </div>
        </div>
        <el-divider border-style="dashed" />
        <div class="myH-stats__body--bottom">
          <statsHero :stats="heros.stats"/>
        </div>
        <!-- <el-button type="danger" @click="removeHero">Remove</el-button> -->
      </template>
      <div class="equipment-wrapper" style="display:flex;justify-content: space-between;">
        <inventory />
        <equipement />
      </div>
    
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import statsHero from "@/components/hero/statsHero.vue";
import equipement from "@/components/hero/equipedItem.vue";
import inventory from "@/components/inventory/inventory.vue"

export default {
  components: { statsHero, inventory, equipement },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("heros/fetchHeros", this.user);
  },
  computed: {
    ...mapGetters({
      heros: "heros/heros",
      userId: "auth/userId",
      user: "auth/user",
      items: "items/items",
      equipedItems: "items/equipedItems"
    }),
    herosExpPercent() {
      return this.heros.level.number * 100;
    },
  },
  methods: {
    removeHero() {
      this.$store.dispatch("heros/removeHero", this.user);
    },
    redirectToCreateHero() {
      this.$router.replace("create");
    },
    equipItem(item) {
      this.$store.dispatch("items/addEquipement", item);
    },
  },
};
</script>
<style scoped lang="scss">
.myH-stats {
  width: 50%;
  margin: 2rem auto;
  border-radius: 4px;
  box-shadow: rgba(white, 0.2) 0px 7px 29px 0px;
  &__title {
    margin: 0;
  }
  &__subTitle {
    font-weight: bold;
  }
  &__header {
    text-align: center;
    background-color: #22123b;
    padding: 0.25rem;
    span {
      color: #ffa243;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
  &__body {
    background-color: #ffa243;
    color: #22123b;
    border: 0.2rem solid #22123b;
    padding: 2rem;
    box-shadow: inset 0 0 5px;
    text-transform: capitalize;
    &--top {
      text-align: center;
    }
    .el-divider {
      border-color: #22123b;
    }
  }
  &__progress {
    padding: 1rem 0 0;
    display: flex;
    span {
      margin: auto 0;
    }
    .el-progress {
      width: 80%;
      margin-left: auto;
    }
  }
}
</style>