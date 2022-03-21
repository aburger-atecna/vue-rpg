<template>
  <div class="rpg-create" color="white">
    <el-card class="box-card">
      <el-form ref="formRef">
        <el-form-item label="Your name">
          <el-input v-model="currentHero.name"></el-input>
        </el-form-item>
        <el-form-item label="Your sexe">
          <el-radio-group v-model="currentHero.sexe">
            <el-radio
              v-for="sexe in heroBlank.sexes"
              :key="sexe"
              :label="sexe"
            ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Your race">
          <el-select
            placeholder="please select your race"
            v-model="currentHero.race"
          >
            <el-option
              v-for="item in heroBlank.races"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Your class">
          <el-select
            placeholder="please select your class"
            v-model="currentHero.class"
          >
            <el-option
              v-for="item in heroBlank.class"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "createHero",
  components: {},
  data() {
    return {
      currentHero: {},
    };
  },
  computed: {
    ...mapState({
      message: (state) => state.obj.message,
    }),
    ...mapGetters({
      heroBlank: "heros/heroBlank",
    }),
    ...mapActions({}),
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("heros/addNewHero", this.currentHero);
      this.currentHero = false;
    },
  },
  created() {},
};
</script>
<style scoped>
.rpg-create {
  width: 33%;
  margin: 3rem auto;
}
</style>
