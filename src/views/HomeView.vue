<template>
  <div class="home">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import itemCard from "../components/inventory/itemCard.vue";
export default {
  name: "homeView",
  components: {
  },
  computed: {
    ...mapGetters({
    }),
  },
  created() {
  },
};
</script>
