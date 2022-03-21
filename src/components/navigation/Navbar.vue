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
    <el-menu-item index="3" disabled
      ><el-link :underline="false">
        <router-link to="/" class="button is-primary"
          >My Hero</router-link
        ></el-link
      ></el-menu-item
    >
    <el-menu-item index="4"
      ><el-link :underline="false"
        ><router-link to="/dashboard" class="button is-primary"
          >My Hero</router-link
        ></el-link
      ></el-menu-item
    >
    <el-menu-item index="5"
      ><el-link :underline="false"
        ><router-link to="/login" class="button is-primary"
          >Login</router-link
        ></el-link
      ></el-menu-item
    >
    {{ hasAccount }}
    <template v-if="hasAccount">
      <div class="nav-item">{{ user.data.displayName }}</div>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="signOut">Sign out</a>
      </li>
    </template>
    <template v-if="!hasAccount">
      <li class="nav-item">
        <router-link to="login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="register" class="nav-link">Register</router-link>
      </li>
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
    }),
    hasAccount() {
      return this.user.loggedIn;
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
  },
};
</script>
<style scoped>
.el-menu--horizontal {
  border: none;
}
</style>