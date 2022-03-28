<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "./components/navigation/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("auth/authAction");
  },
  computed: {
  }
};
</script>
<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-image: url("@/assets/background-pixel.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
a {
  text-decoration: none;
}
</style>
