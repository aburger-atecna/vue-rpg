<template>
  <h2>Login</h2>
  <el-form
    class="demo-form-inline"
    @submit.prevent="submit"
  >
    <el-form-item prop="email">
      <el-input
        id="login-email"
        placeholder="Email"
        type="email"
        class="form-control"
        name="email"
        value
        required
        autofocus
        v-model="form.email"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        autocomplete="off"
        placeholder="Password"
        id="login-password"
        type="password"
        class="form-control"
        name="password"
        required
        v-model="form.password"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        class="login-button"
        type="primary"
        native-type="submit"
        block
        >Login</el-button
      >
    </el-form-item>
    <a class="forgot-password" href="https://oxfordinformatics.com/"
      >Forgot password ?</a
    >
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("auth/login", this.form);
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}
.login-button {
  width: 100%;
}
</style>