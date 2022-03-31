<template>
  <div class="statsHero">
    <h4>Yours stats</h4>
    {{ statsBonus }}
    <div class="statsHero__item">
      <span> Health : </span>
      <span class="statsHero__item-value">
        {{ heroStats.life }}
      </span>
      <span class="statsHero__item-bonus">( + {{ calculLife }} )</span>
    </div>
    <el-divider />
    <div class="statsHero__item">
      <span> Mana : </span>
      <span class="statsHero__item-value">
        {{ heroStats.mana }}
      </span>
      <span class="statsHero__item-bonus">( + {{ calculMana }} )</span>
    </div>
    <el-divider />
    <div class="statsHero__item">
      <span> Attack : </span>
      <span class="statsHero__item-value">
        {{ heroStats.atk }}
      </span>
      <span class="statsHero__item-bonus">( + {{ calculAtk }} )</span>
    </div>
    <el-divider />
    <div class="statsHero__item">
      <span> Defense : </span>
      <span class="statsHero__item-value">
        {{ heroStats.def }}
      </span>
      <span class="statsHero__item-bonus">( + {{ calculDef }} )</span>
    </div>
    <el-divider />
    <div class="statsHero__item">
      <span> Magic : </span>
      <span class="statsHero__item-value">
        {{ heroStats.magicAtk }}
      </span>
      <span class="statsHero__item-bonus">( + {{ calculMagicAtk }} )</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    stats: "",
    bonus: "",
  },
  computed: {
    ...mapGetters({
      items: "items/items",
      equipedItems: "items/equipedItems",
    }),
    heroStats() {
      return this.stats;
    },
    statsBonus() {
      return this.bonus;
    },
    calculAtk() {
      return this.equipedItems.reduce((acc, item) => acc + item.bonus.atk, 0);
    },
    calculDef() {
      return this.equipedItems.reduce((acc, item) => acc + item.bonus.def, 0);
    },
    calculLife() {
      return this.equipedItems.reduce((acc, item) => acc + item.bonus.life, 0);
    },
    calculMagicAtk() {
      return this.equipedItems.reduce(
        (acc, item) => acc + item.bonus.magicAtk,
        0
      );
    },
    calculMana() {
      return this.equipedItems.reduce((acc, item) => acc + item.bonus.mana, 0);
    },
  },
};
</script>
<style scoped lang="scss">
.statsHero {
  background-color: #ffc890;
  padding: 0.25rem 1.5rem;
  margin-bottom: 1rem;
  &__item {
    padding: 0.66rem 0;
    display: flex;
    width: 90%;
    position: relative;
    &-value {
      margin-left: auto;
    }
    &-bonus {
      color:green;
      font-weight: bold;
      position: absolute;
      right: -60px;
    }
  }
  .el-divider {
    padding: 0;
    margin: 0;
    width: 66%;
    margin: auto;
    border-color: #ffa243;
  }
}
</style>