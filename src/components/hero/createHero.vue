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
              v-for="(race, index) in heroBlank.races"
              :key="index"
              :label="race.name"
              :value="race.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Your class">
          <el-select
            placeholder="please select your class"
            v-model="currentHero.class"
            :disabled="!currentHero.race"
            ><template v-if="currentHero.race">
              <el-option
                v-for="subClass in classArray.subClass"
                :key="subClass"
                :label="subClass.name"
                :value="subClass.name"
              ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item>
            <statsHero v-if="currentHero.class" :stats="statsArray" />
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
import statsHero from "./statsHero.vue"
export default {
  name: "createHero",
  components: {statsHero},
  data() {
    return {
      currentHero: {
        name: '',
        sexe: '',
        race: '',
        class: '',
        stats: '',
        level: {
          number: 1,
          exp: 0
        }
      },
    };
  },
  computed: {
    ...mapState({
      message: (state) => state.obj.message,
    }),
    ...mapGetters({
      heroBlank: "heros/heroBlank",
    }),
    classArray() {
      return this.heroBlank.races.find((obj) => {
        return obj.name === this.currentHero.race;
      });
    },
    statsArray() {
      return this.classArray.subClass.find((obj) => {
        return obj.name === this.currentHero.class;
      });
    },
  },
  methods: {
    async onSubmit() {
      console.log(this.currentHero);
      this.currentHero.stats = this.statsArray.stats;
      await this.$store.dispatch("heros/addNewHero", this.currentHero);
      this.currentHero = false;
    },
  },
  created() {
    //console.log(this.heroBlank)
  },
};
</script>
<style scoped>
.rpg-create {
  width: 33%;
  margin: 3rem auto;
}
</style>
