<template>
  <el-card  v-if="heros.length" class="box-card">
    <div class="text item">my hero</div>
    <div>{{ heros }}</div>
  </el-card>
  <create-hero v-else />
</template>
<script>
import { mapGetters } from "vuex";
import createHero from '../hero/createHero.vue';
export default {
  components: { createHero },
  data() {
    return {
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      heros: "auth/heros"
    }),
  }
};
</script>