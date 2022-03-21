<template>
  <el-card class="box-card">
    <div class="text item">my hero</div>
    <div>{{ heros }}</div>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      heros: "auth/heros",
      activeUID: "auth/activeUID"
    }),
  }
};
</script>