<template>
      <form @submit.prevent="updateUser(user);">
        <input
          id="name"
          :value="activeUser.name"
          @input="updateLocalUser($event);" />
        <input
          id="role"
          :value="activeUser.role"
          @input="updateLocalUser($event);" />
        <input
          id="email"
          :value="activeUser.email"
          @input="updateLocalUser($event);" />
        <input
          id="insta"
          :value="activeUser.insta"
          @input="updateLocalUser($event);" />
        <input
          type="submit"
          value="Submit" />
      </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UpdateUser",
  data() {
    return {
      user: {},
      key: 1
    };
  },
  computed: {
    ...mapGetters(["activeUser"])
  },
  methods: {
    ...mapActions(["updateUser"]),
    updateLocalUser(e) {
      this.$set(this.user, e.target.id, e.target.value);
    },
  }
};
</script>