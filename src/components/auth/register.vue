<template>
  <h2>Register</h2>
  <el-form
    class="demo-form-inline"
    @submit.prevent="submit"
  >
    <el-form-item label="name">
      <el-input
        id="name"
        type="name"
        class="form-control"
        name="name"
        value
        required
        autofocus
        v-model="form.name"
      />
    </el-form-item>
    <el-form-item label="email">
      <el-input
        id="register-email"
        type="email"
        class="form-control"
        name="email"
        value
        required
        autofocus
        v-model="form.email"
      />
    </el-form-item>
    <el-form-item label="password">
      <el-input
        id="register-password"
        type="password"
        class="form-control"
        name="password"
        required
        v-model="form.password"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-button" @click="submit" block
        >Create</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("auth/register", this.form);
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