<template>
  DASHBOARD
  <el-card class="box-card">
    <template v-if="heros">
      <div class="text item">my hero</div>
      <div>{{ heros }}</div>
      <el-button type="danger" @click="removeHero">Remove</el-button>
    </template>
    <template v-else>
      <h4>You have no hero !!</h4>
      <div>Do you want to create one ?</div>
      <el-button type="primary" @click="redirectToCreateHero"
        >Create hero</el-button
      >
    </template>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
import createHero from '@/components/hero/createHero.vue'

export default {
  components: {},
  data() {
    return {};
  },
  created() {
    console.log('test', this.user)
    this.$store.dispatch("heros/fetchHeros", this.user);
  },
  computed: {
    ...mapGetters({
      heros: "heros/heros",
      userId: "auth/userId",
      user: "auth/user",
    }),
  },
  methods: {
    removeHero() {
      this.$store.dispatch("heros/removeHero", this.user);
    },
    redirectToCreateHero() {
      this.$router.replace('create')
    },
  },
};
</script>