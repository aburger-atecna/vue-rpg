<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#22123b"
    text-color="#fc9f46"
    active-text-color="#fd5"
  >
    <el-menu-item index="1"
      ><el-link :underline="false"
        ><router-link to="/" class="button is-primary"
          >Vue RPG</router-link
        ></el-link
      ></el-menu-item
    >
    <el-sub-menu index="2">
      <template #title>Class</template>
      <el-menu-item index="2-1">Class 1</el-menu-item>
      <el-menu-item index="2-2">Class 2</el-menu-item>
      <el-menu-item index="2-3">Class 3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" :disabled="!heros.length"
      ><el-link :underline="false">
        <router-link to="/" class="button is-primary"
          >My Hero</router-link
        ></el-link
      ></el-menu-item
    >
    <template v-if="hasAccount">
      <el-menu-item index="4"
        ><el-link :underline="false"
          ><router-link to="/dashboard" class="button is-primary">{{
            user.data.displayName
          }}</router-link></el-link
        ></el-menu-item
      >
      <el-menu-item index="5"
        ><el-link :underline="false"
          ><router-link
            to="/"
            @click.prevent="signOut"
            class="button is-primary"
            >Sign out</router-link
          ></el-link
        ></el-menu-item
      >
    </template>
    <template v-if="!hasAccount">
      <el-menu-item index="5"
        ><el-link :underline="false"
          ><router-link to="/login" class="button is-primary"
            >Login</router-link
          ></el-link
        ></el-menu-item
      >
    </template>
  </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "auth/user",
      heros: "heros/heros",
    }),
    hasAccount() {
      return this.user.loggedIn;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("auth/signOut", this.form);
    },
  },
};
</script>
<style scoped>
.el-menu--horizontal {
  border: none;
}
</style>