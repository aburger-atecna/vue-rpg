<template>
  <div>
    <template v-if="!loggedIn">
      <el-tabs type="border-card">
        <el-tab-pane label="Login">
          <Login />
        </el-tab-pane>
        <el-tab-pane label="Register">
          <Register />
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Register from "./auth/register.vue";
import Login from "./auth/login.vue";

export default {
  components: {
    Register,
    Login
  },
  props: [],
  data() {
    return {
    };
  },
  mounted() {},
  created() {},
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "auth/user",
    }),
    loggedIn() {
      return this.user.loggedIn
    }
  },
  methods: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.el-tabs {
  width: 33%;
  margin: 3rem auto;
}
</style>